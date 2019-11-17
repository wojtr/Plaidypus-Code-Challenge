const YelpFusionAPI = require('./YelpFusionAPI');

class YelpFusionBusinessAPI extends YelpFusionAPI {
    /*
        Function to currate the data sent back by the Yelp Fusion Business API.
            data: JSON object recieved from an HTTP request to Yelp Fusion API.
    */
    parseData(data) {
        let business = { 
            id: data.id, 
            name: data.name,
            display_phone: data.display_phone,
            review_count: data.review_count,
            rating: data.rating,
            location: data.location
        };
        return business;
    }
    /*
        Begins the call to the yelp fusion Business API by passing the nessary information to makeHTTPRequest.
            res: response object to the Front End.
            id: id of the business that we want more information on.
    */
    details(res, id) {
        let path = `/v3/businesses/${id}`;
        this.makeHttpRequest(res, this.parseData, path);
    }
}

module.exports = YelpFusionBusinessAPI;

