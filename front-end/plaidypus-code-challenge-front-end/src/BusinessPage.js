import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BusinessPage.css';

export class BusinessPage extends React.Component {
    render() {
        console.log(this.props.details);
        return (
            <Container>
                <Row className="m-4">
                    <Link to="/">Return to Search</Link>
                </Row>
                <Row>
                    <h1>{this.props.details.name}</h1>
                </Row>
                <Row>
                    <p>{this.props.details.location.display_address[0]}, {this.props.details.location.display_address[1]}</p>
                </Row>
                <Row className="m-10">
                    <p>Rating: {this.props.details.rating} with {this.props.details.review_count} reviews</p>
                </Row>
            </Container>
        );
    }
}
