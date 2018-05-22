import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

import DocIndex from './Documentation/Index';
import LandingPage from './LandingPage/LandingPage';
import cloudniiteLogoWhite from './cloudniiteLogo(white).png';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="App-title"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}><img className="cloudniiteLogoWhite" src={cloudniiteLogoWhite} /></Link></div>
            <p className="App-intro" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
              <a href="https://github.com/C4-Serverless/cloudniite">AWS Lambda Optimization and Monitoring Tool</a>
            </p>
            <ul>
              <li className="links"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
              <li className="links"><Link to="/documentation/introduction" style={{ textDecoration: 'none', color: 'white' }}>Docs</Link></li>
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
