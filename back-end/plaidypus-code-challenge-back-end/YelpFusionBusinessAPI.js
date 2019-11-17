const YelpFusionAPI = require('./YelpFusionAPI');

class YelpFusionBusinessAPI extends YelpFusionAPI {
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
    details(res, id) {
        let path = `/v3/businesses/${id}`;
        this.makeHttpRequest(res, this.parseData, path);
    }
}

module.exports = YelpFusionBusinessAPI;

