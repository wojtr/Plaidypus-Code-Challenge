const express = require('express');
const app = express();
const port = 8080;

const YelpFusionSearchAPI = require('./YelpFusionSearchAPI');
const YelpFusionBusinessAPI = require('./YelpFusionBusinessAPI');
const API_KEY = 'OuXTRZohluejbYr3JZvkLJPSkqFvWvAmi0EMWgOYRpoOJMHcSFwOqNFn6AL_GrY-HvUq-OXOfSXHkeNPyKtV_SQLyngMYAys3c_Q5Ft9RvHOFvazT6yZCWdr3JPQXXYx';

app.get('/search', (req, res) => {
    if (!req.query.location) {
        res.status(400).send({error: 'Location not specifyed in query parameters.'});
    } else if (typeof req.query.location !== 'string') {
        res.status(400).send({error: 'Location query parameter is not a string.'});
    }  else {
        let request = new YelpFusionSearchAPI(API_KEY);
        request.search(res, req.query.location);
    }
});

app.get('/business', (req, res) => {
    if (!req.query.id) {
        res.status(400).send({error: 'Business ID not specifyed in query parameters.'});
    } else if (typeof req.query.id !== 'string') {
        res.status(400).send({error: 'Business ID query parameter is not a string.'});
    }  else {
        let request = new YelpFusionBusinessAPI(API_KEY);
        request.details(res, req.query.id);
    }
});

app.listen(port, () => console.log(`Plaudypus Code Challenge Back End listening on port ${port}!`));
