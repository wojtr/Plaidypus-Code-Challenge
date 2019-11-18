import React from 'react';
import { Container, Row, ListGroup } from 'react-bootstrap';
import { SearchBar } from './SearchBar';
import { BusinessLink } from './BusinessLink';
import './SearchPage.css';

export class SearchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            results: []
        };
        this.updateSearchResults = this.updateSearchResults.bind(this);
    }
    /*
        DOM update function for when the Back End comes back with the results of the Yelp API search.
            results: json object parsed from the data sent by the Back End.
    */
    updateSearchResults(results) {
        if (results.businesses.length === 0) {
            alert("No Businesses could be found.")
        }
        results.businesses.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        this.setState({
           results: results.businesses
        });
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-center m-4">
                    <h1>Plaidypus Code Challenge</h1>
                </Row>
                <Row className="justify-content-center m-4">
                    <p>Search for resturaunts by typing a location into the search bar below and pressing search.</p>
                </Row>
                <Row className="justify-content-center m-2">
                    <SearchBar updateSearchResults={this.updateSearchResults} />
                </Row>
                <Row className="justify-content-center m-2">
                    <ListGroup>
                        {this.state.results.map((result, index) => <ListGroup.Item key={index}><BusinessLink id={result.id} name={result.name} updateBuisinessDetails={this.props.updateBuisinessDetails} /></ListGroup.Item>)}
                    </ListGroup>
                </Row>
            </Container>
        );
    }
}
