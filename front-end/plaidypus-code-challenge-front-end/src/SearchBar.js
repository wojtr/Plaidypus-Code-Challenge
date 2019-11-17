import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import { makeHTTPRequest } from './HTTPRequest';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
    }
    search() {
        let location = ReactDOM.findDOMNode(this.refs.Search).value;
        if (location !== '') {
            let path = `/search?location=${location}`;
            makeHTTPRequest(this.props.updateSearchResults, path);
        }
    }
    render() {
        return (
            <Form inline>
                <FormControl ref="Search" type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" onClick={this.search}>Search</Button>
            </Form>
        );
    }
}
