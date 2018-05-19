import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import QuickStart from './QuickStart/QuickStart';
import Tutorial from './Tutorial/Tutorial';
import Introduction from './Introduction/Introduction';
import FAQ from './FAQ/FAQ';
import cloudniiteLogoBlack from './cloudniiteLogo(black).png';

import './Index.css';


class DocIndex extends Component {

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      
      <div className="doc-outer">
        <div className="doc-nav-outer">
          <div className="doc-nav-inner">
            <h2 className="">Documentation</h2>
            <li className="doc-nav-inner-list list1"><Link to="/documentation/introduction">Introduction</Link></li>
            <li className="doc-nav-inner-list"><Link to="/documentation/quick-start">Quick Start</Link></li>
            <li className="doc-nav-inner-list"><Link to="/documentation/tutorial">Tutorial</Link></li>
            <li className="doc-nav-inner-list"><Link to="/documentation/faq">FAQ</Link></li>
            <img className = "cloudniiteLogo" src = {cloudniiteLogoBlack}/>
          </div>
        </div>

        <div className="doc-sections">
          <Route path="/documentation/introduction" component={Introduction} />
          <Route path="/documentation/quick-start" component={QuickStart} />
          <Route path="/documentation/tutorial" component={Tutorial} />
          <Route path="/documentation/faq" component={FAQ} />
        </div>

      </div>
    );
  }
}

export default DocIndex;
