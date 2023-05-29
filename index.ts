const http = require('http');
const express = require('express');
const { HLTV } = require("hltv");

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

app.get('/matches', async (req, res) => {
  HLTV.getMatches().then((response) => {
    res.json(response);
  })
});

app.get('/events', async (req, res) => {
  HLTV.getEvents().then((response) => {
    res.json(response);
  })
});

app.get('/event', async (req, res) => {
    HLTV.getEvent({ id: req.query.id }).then((response) => {
        res.json(response);
})
})

app.get('/match', async (req, res) => {
    setTimeout(() => {
        HLTV.getMatch({ id: req.query.id }).then((response) => {
        res.json(response);
        })
    }, 3000);
});

app.get('/matchStats', async (req, res) => {
    HLTV.getMatchStats({ id: req.query.id}).then((response) => {
        res.json(response);
    });
});

app.get('/matchMapStats', async (req, res) => {
    HLTV.getMatchMapStats({ id: req.query.id }).then((response) => {
        res.json(response);
})
})

app.get('/team', async (req, res) => {
    HLTV.getTeam({ id: req.query.id}).then((response) => {
        res.json(response);
    })
});

app.get('/teamStats', async (req, res) => {
    HLTV.getTeamStats({ id: req.query.id }).then((response) => {
    res.json(response);
})
});

app.get('/player', async (req, res) => {
    HLTV.getPlayer({ id: req.query.id }).then((response) => {
    res.json(response)
})
});

app.get('/playerStats', async (req, res) => {
    HLTV.getPlayerStats({ id: req.query.id}).then((response) => {
        res.json(response);
    });
});

app.get('/playerRanking', async (req, res) => {
    HLTV.getPlayerRanking({ startDate: req.query.startDate, endDate: req.query.endDate }).then((response) => {
        res.json(response);
    });
});

app.get('/teamRanking', async (req, res) => {
    HLTV.getTeamRanking().then((response) => {
        res.json(response);
    });
})

app.get('/streams', async (req, res) => {
    HLTV.getStreams().then((response) => {
        res.json(response);
    })
});

server.listen(3001, () => {
    console.log('Server running');
    })