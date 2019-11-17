const https = require('https');

class YelpFusionAPI {
    constructor(apiKey) {
        this._apikey = apiKey;
    }
    get apiKey() {
        return this._apikey;
    }
    set apiKey(value) {
        this._apikey = value;
    }
    /*
        This method creates and sends the nessary Yelp Fusion API request.
            serverRes: Once the data has been recieve and processed the response to the front end is sent.
            parser: function passed in to curate the information sent back to the Front End.
            path: path to the correct API.
    */
    makeHttpRequest(serverRes, parser, path) {
        let options = {
            hostname: 'api.yelp.com',
            method: 'GET',
            path: path,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            }
        };
        const request = https.request(options, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                data = parser(JSON.parse(data));
                serverRes.send(data);
            });
        });

        request.on('error', e => {
            serverRes.status(500).send(e);
        });

        request.end();
    }
    business(id) {

    }
}

module.exports = YelpFusionAPI;
