import React from 'react';
import { Link } from 'react-router-dom';
import './QuickStart.css'

const QuickStart = () => {
    return (
        <div id="quick-start-outer">
            <h1>Quick Start Page</h1>

            <h4>AWS Configuration</h4>
            <ol id="install-aws-ol">
                <li>
                    Install our library with npm install  
                </li>
                <code>npm install --save cloudniite</code>  
            </ol>

            <h4>Installation</h4>
            <ol id="install-cloudniite-ol">
                <li>
                    Install our library with npm install  
                </li>
                <code>npm install --save cloudniite</code>  
            </ol>
        </div>
    )
}

export default QuickStart;