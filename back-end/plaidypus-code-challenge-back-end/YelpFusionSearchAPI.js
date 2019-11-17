const YelpFusionAPI = require('./YelpFusionAPI');

class YelpFusionSearchAPI extends YelpFusionAPI {
    /*
        Function to currate the data sent back by the Yelp Fusion Search API.
            data: JSON object recieved from an HTTP request to Yelp Fusion Search API.
    */
    parseData(data) {
        let businesses = {businesses: []};
        if (data.error) {
            return businesses;
        }
        for (let business of data.businesses) {
            businesses.businesses.push({ id: business.id, name: business.name });
        }
        return businesses;
    }
     /*
        Begins the call to the yelp fusion search API by passing the nessary information to makeHTTPRequest.
            res: response object to the Front End.
            location: the string that was inputed by the user.
    */
    search(res, location) {
        let path = `/v3/businesses/search?location=${location}`;
        this.makeHttpRequest(res, this.parseData, path);
    }
}

module.exports = YelpFusionSearchAPI;
