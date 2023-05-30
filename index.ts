const http = require('http');
const express = require('express');
const { HLTV } = require("hltv");

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

app.get('/matches', async (req: any, res: any) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
  HLTV.getMatches().then((response: any) => {
    console.log(response, 'getMatches');
    res.json(response);
  })
});

app.get('/events', async (req: any, res: any) => {
  HLTV.getEvents().then((response: any) => {
    res.json(response);
  })
});

app.get('/event', async (req: any, res: any) => {
    HLTV.getEvent({ id: req.query.id }).then((response: any) => {
        res.json(response);
})
})

app.get('/match', async (req: any, res: any) => {
        HLTV.getMatch({ id: req.query.id }).then((response: any) => {
        res.json(response);
        })
});

app.get('/matchStats', async (req: any, res: any) => {
    HLTV.getMatchStats({ id: req.query.id}).then((response: any) => {
        res.json(response);
    });
});

app.get('/matchMapStats', async (req: any, res: any) => {
    HLTV.getMatchMapStats({ id: req.query.id }).then((response: any) => {
        res.json(response);
})
})

app.get('/team', async (req: any, res: any) => {
    HLTV.getTeam({ id: req.query.id}).then((response: any) => {
        res.json(response);
    })
});

app.get('/teamStats', async (req: any, res: any) => {
    HLTV.getTeamStats({ id: req.query.id }).then((response: any) => {
    res.json(response);
})
});

app.get('/player', async (req: any, res: any) => {
    HLTV.getPlayer({ id: req.query.id }).then((response: any) => {
    res.json(response)
})
});

app.get('/playerStats', async (req: any, res: any) => {
    HLTV.getPlayerStats({ id: req.query.id}).then((response: any) => {
        res.json(response);
    });
});

app.get('/playerRanking', async (req: any, res: any) => {
    HLTV.getPlayerRanking({ startDate: req.query.startDate, endDate: req.query.endDate }).then((response: any) => {
        res.json(response);
    });
});

app.get('/teamRanking', async (req: any, res: any) => {
    HLTV.getTeamRanking().then((response: any) => {
        res.json(response);
    });
})


app.get('/streams', async (req: any, res: any) => {
    HLTV.getStreams().then((response: any) => {
        res.json(response);
    })
});

server.listen(3001, () => {
    console.log('Server running');
    })