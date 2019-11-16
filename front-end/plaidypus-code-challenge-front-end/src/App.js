import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { BusinessPage } from './BusinessPage'
import './App.css';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      businessid: "",
      details: []
    }
    this.updateBuisinessDetails = this.updateBuisinessDetails.bind(this);
  }
  updateBuisinessDetails(id, details) {
    this.setState({
      businessid: id,
      details: details
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchPage updateBuisinessDetails={this.updateBuisinessDetails} />
          </Route>
          <Route exact path={`/${this.state.businessid}`}>
            <BusinessPage id={this.state.businessid} details={this.state.details} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
