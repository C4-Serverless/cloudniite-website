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
                    Install our library with npm install
                </div>
                <code>npm install --save cloudniite</code>
            </div>
            <div>
                <h4>Sample Library Features</h4>
                <div className="files-div">
                    <pre>{`const cloudniite = require('cloudniite');`}</pre>
                    <pre className="comments">{`/* Pass in your region, and your poolId
Configure returns a promise.
If you wish to warm up on server start, use the .then method to invoke the other methods. */`}</pre>
                    <pre>{`cloudniite.configure('region','poolId').then(() => {`}</pre>
                    <pre className="commentsAll">{`    //Method for creating tag group/s`}</pre>
                    <pre>{`     cloudniite.createTagGroup("#HelloWorld", "TestFunction");`}</pre>
                    <pre className="commentsAll">{`    //Method for warming up tag group/s`}</pre>
                    <pre>{`     cloudniite.warmupTagGroup(null,"#HelloWorld");`}</pre>
                    <pre className="commentsAll">{`    //Method for warming up function/s`}</pre>
                    <pre>{`     cloudniite.warmupFunctions(null,"TestFunction");`}</pre>
                    <pre>{`});`}</pre>

                    <pre className="comments">{`//This is a custom route for specifically for development 
//Go to this route to view all your tag groups and AWS Lambda function information`}</pre>
                    <pre>{`app.get('/getHtmlViz', cloudniite.getHtmlViz);`}</pre>
                </div>
            </div>
        </div>
    )
}

export default QuickStart;