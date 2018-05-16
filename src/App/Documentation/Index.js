import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import GetStarted from './GetStarted/GetStarted';
import './Index.css';


class DocIndex extends Component {
  render() {
    return (
      <div className="">
        <header className="">
          <h1 className="">Documentation</h1>
          <li><Link to="/documentation/get-started">Quick Start</Link></li>
          <li><Link to="/documentation/tutorial">Tutorial</Link></li>
        </header>
        <p className="">
          Documentation Components will go here
        </p>

        <Route path="/documentation/get-started" component={GetStarted} />
      </div>
    );
  }
}

export default DocIndex;
