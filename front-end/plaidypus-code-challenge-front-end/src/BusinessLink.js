import React from 'react';
import { Link } from 'react-router-dom';
import { makeHTTPRequest } from './HTTPRequest';
import './BusinessLink.css';

export class BusinessLink extends React.Component {
    constructor() {
        super();
        this.getBusinessDetails = this.getBusinessDetails.bind(this);
    }
    getBusinessDetails() {
        let path = `/business?id=${this.props.id}`;
        makeHTTPRequest(this.props.updateBuisinessDetails, path);
    }
    render() {
        return (
            <Link to={`/${this.props.id}`} onClick={this.getBusinessDetails}>{this.props.name}</Link>
        );
    }
}
