const http = require('http');
const express = require('express');
const { HLTV } = require("hltv");

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

app.get('/matches', async (req, res) => {
  HLTV.getMatches().then((response) => {
    console.log(response, 'getMatches')
    res.json(response);
  })
});


app.get('/events', async (req, res) => {
  HLTV.getEvents().then((response) => {
    console.log(response, 'getEvents')
    res.json(response);
  })
});

app.get('/event', async (req, res) => {
    HLTV.getEvent({ id: req.query.id }).then((response) => {
        console.log(response, 'getEvent')
        res.json(response);
})
})

app.get('/match', async (req, res) => {
        HLTV.getMatch({ id: req.query.id }).then((response) => {
            console.log(response, 'getMatch id ' + req.query.id)
        res.json(response);
        })
});

app.get('/matchStats', async (req, res) => {
    HLTV.getMatchStats({ id: req.query.id}).then((response) => {
        console.log(response, 'getMatchStats id ' + req.query.id)
        res.json(response);
    });
});

app.get('/matchMapStats', async (req, res) => {
    HLTV.getMatchMapStats({ id: req.query.id }).then((response) => {
        console.log(response, 'getMatchMapStats id ' + req.query.id)
        res.json(response);
})
})

app.get('/team', async (req, res) => {
    HLTV.getTeam({ id: req.query.id}).then((response) => {
        console.log(response, 'getTeam id ' + req.query.id)
        res.json(response);
    })
});

app.get('/teamStats', async (req, res) => {
    HLTV.getTeamStats({ id: req.query.id }).then((response) => {
         console.log(response, 'getTeamStats id ' + req.query.id)
    res.json(response);
})
});

app.get('/player', async (req, res) => {
    HLTV.getPlayer({ id: req.query.id }).then((response) => {
        console.log(response, 'getPlayer id ' + req.query.id)
    res.json(response)
})
});

app.get('/playerStats', async (req, res) => {
    HLTV.getPlayerStats({ id: req.query.id}).then((response) => {
        console.log(response, 'getPlayerStats id ' + req.query.id)
        res.json(response);
    });
});

app.get('/playerRanking', async (req, res) => {
    HLTV.getPlayerRanking({ startDate: req.query.startDate, endDate: req.query.endDate }).then((response) => {
        console.log(response, 'getPlayerRanking ')
        res.json(response);
    });
});

app.get('/teamRanking', async (req, res) => {
    HLTV.getTeamRanking().then((response) => {
        console.log(response, 'getTeamRanking')
        res.json(response);
    });
})

app.get('/streams', async (req, res) => {
    HLTV.getStreams().then((response) => {
        console.log(response, 'getStreams')
        res.json(response);
    })
});

server.listen(3001, () => {
    console.log('Server running');
    })