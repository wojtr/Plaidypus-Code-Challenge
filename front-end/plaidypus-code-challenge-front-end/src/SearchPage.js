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
    updateSearchResults(results) {
       this.setState({
           results: results
       });
    }
    render() {
        return (
            <Container>
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
