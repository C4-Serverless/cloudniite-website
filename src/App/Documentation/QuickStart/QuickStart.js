import React from 'react';
import { Link } from 'react-router-dom';
import './QuickStart.css'

const QuickStart = () => {
    return (
        <div id="quick-start-outer">
            <h1>Quick Start Page</h1>

            <h4>AWS Configuration</h4>
            <div id="install-aws-outer">
                <div className="install-aws-text">
                    1. Install our library with npm install  
                </div>
                <code>npm install --save cloudniite</code>  
            </div>
        </div>
    )
}

export default QuickStart;