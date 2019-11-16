import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
    }
    search() {
        let location = ReactDOM.findDOMNode(this.refs.Search).value;
        console.log(`Calling Back End, searching for bussiness in ${location} and then updating the search results.`)
         /* 
            Todo:
                Call back end with text provided by search bar.
                Updated result list based on the response from back end.
        */
        let results = [{
            "id": "1",
            "name": "Four Barrel Coffee"
          },
          {
            "id": "2",
            "name": "StarBucks"
          }
        ];
        this.props.updateSearchResults(results);
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
