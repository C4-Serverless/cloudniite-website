import React, { Component } from 'react';
import './LandingPage.css';
import cloudniiteLogoBlack from './cloudniiteLogo(black).png';
import example1 from './demo.gif';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="cloudniiteLogoDiv">
          <img className="landingCloudniiteLogo" src={cloudniiteLogoBlack} />
        </div>
        <div className="example1Div">
          <img className="example1" src={example1} />
        </div>

      </div>
    );
  }
}

export default LandingPage;
