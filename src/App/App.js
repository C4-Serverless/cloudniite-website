import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

import DocIndex from './Documentation/Index';
import LandingPage from './LandingPage/LandingPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Cloudniite</Link></h1>
            <p className="App-intro">
              AWS Lambda Optimization and Monitoring Tool
            </p>
            <ul>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
              <li><Link to="/documentation/introduction" style={{ textDecoration: 'none', color: 'white' }}>Docs</Link></li>
            </ul>
          </header>

          <Route exact path="/" component={LandingPage} />
          <Route path="/documentation" component={DocIndex} />
        </div>
      </Router>
    );
  }
}

export default App;
