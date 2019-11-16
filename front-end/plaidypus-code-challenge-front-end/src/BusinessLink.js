import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessLink.css';

export class BusinessLink extends React.Component {
    constructor() {
        super();
        this.getBusinessDetails = this.getBusinessDetails.bind(this);
    }
    getBusinessDetails() {
         /* 
            Todo:
                Call back end with id provide through component properties.
                Create Business page with returned details then call appUpdate;
        */
       let details = {
            "id": "WavvLdfdP6g8aZTtbBQHTw",
            "name": "Gary Danko",
            "display_phone": "(415) 749-2060",
            "review_count": 5296,
            "rating": 4.5,
            "location": {
                "address1": "800 N Point St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "800 N Point St",
                    "San Francisco, CA 94109"
                ]
            }
        };
        this.props.updateBuisinessDetails(this.props.id, details)
        console.log(`Calling Back End for details for business with id: ${this.props.id}.`);
    }
    render() {
        return (
            <Link to={`/${this.props.id}`} onClick={this.getBusinessDetails}>{this.props.name}</Link>
        );
    }
}
