const express = require('express');
const app = express();
const port = 8080;

const YelpFusionSearchAPI = require('./YelpFusionSearchAPI');
const YelpFusionBusinessAPI = require('./YelpFusionBusinessAPI');
const API_KEY = /* Please put your Yelp Fusion API key here as a string. */;

/*
    Sets up route for a call to the Yelp Fusion search api done calling request.search. This also checks that the location value is valid.
*/
app.get('/search', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.query.location) {
        res.status(400).send({error: 'Location not specifyed in query parameters.'});
    } else if (typeof req.query.location !== 'string') {
        res.status(400).send({error: 'Location query parameter is not a string.'});
    }  else {
        req.query.location = req.query.location.replace(/ /g, '%20');
        let request = new YelpFusionSearchAPI(API_KEY);
        request.search(res, req.query.location);
    }
});

/*
    Sets up route for a call to the Yelp Fusion business api done calling request.search. This also checks that the id value is valid.
*/
app.get('/business', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.query.id) {
        res.status(400).send({error: 'Business ID not specifyed in query parameters.'});
    } else if (typeof req.query.id !== 'string') {
        res.status(400).send({error: 'Business ID query parameter is not a string.'});
    }  else {
        req.query.id = req.query.id.replace(/ /g, '%20');
        let request = new YelpFusionBusinessAPI(API_KEY);
        request.details(res, req.query.id);
    }
});

app.listen(port, () => console.log(`Plaudypus Code Challenge Back End listening on port ${port}!`));
