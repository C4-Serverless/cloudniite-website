import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css'

const Tutorial = () => {
    return (
        <div id="tutorial-outer">
            <h2>Tutorial Page</h2>

            <h3>Setting Up A New Project</h3>
            <div id="setup-aws-outer">
                <div className="setup-aws-text">1. Follow the AWS step by step tutorial on configuring AWS Cli (you might need to install AWS Cli):</div>
                <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration">https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration</a>
                <div className="setup-aws-text">2. Setup Node package modules:</div>
                <div className="setup-aws-text"><code>npm init</code></div>
                <div className="setup-aws-list"><li>For step by step instructions on setting up your Node package modules (<a href="https://www.sitepoint.com/beginners-guide-node-package-manager/">https://www.sitepoint.com/beginners-guide-node-package-manager)</a></li></div>
                <div className="setup-aws-text">3. Install the following Node dependies:</div>
                <div className="setup-aws-text"><code>npm install --save aws-sdk cloudniite express</code></div>
                <div className="setup-aws-text">4. Create an S3 bucket with the following cli command, which will create a 'my-bucket' named bucket in AWS S3:</div>
                <code>aws s3api create-bucket --bucket my-bucket --region region</code>
                <div className="setup-aws-list"><li>Set your bucket name to your name preference, and your region to the correct region (regions are located on the AWS Interface)</li></div>
                <div className="setup-aws-text">5. Create your yaml and lambda files(Our case test.yaml and lambda.js):</div>
                <div>
                    <h4>test.yaml</h4>
                    <div className= "files-div">
                        <pre>
                            {`AWSTemplateFormatVersion: '2010-09-09'
    Transform: AWS::Serverless-2016-10-31
    Resources:
    TestFunction:
        Type: AWS::Serverless::Function
        Properties:
            Handler: lambda.handleName
            Runtime: nodejs8.10
            Environment: 
                Variables:
                    S3_BUCKET: bucketName
            FunctionName: TestFunction`}
                        </pre>
                    </div>
                </div>
                <div>
                    <h4>lambda.js</h4>
                    <div className="files-div">
                        <pre>{`const aws = require('aws-sdk');

exports.handler = function(event, context, callback) {
    if (event.source === "Cloudniite-Warmup") {
        callback(null,"Warmup");
    } else {
        callback(null, "Lambda function return value");
    }
}`}</pre>
                    </div>
                </div>
                <div className="setup-aws-list"><li>Make sure both the files are in the same folder</li></div>
            </div>
            <div className="setup-aws-text">6. Package and deploy your Lambda files to a stack:</div>
            <div className="setup-aws-text"><code>aws cloudformation package --template-file fileName.yaml <br/> <br/> --output-template-file serverless-output.yaml --s3-bucket my-bucket</code></div>
            <div className="setup-aws-text"><br/><code>aws cloudformation deploy --template-file serverless-output.yaml <br/> <br/> --stack-name stackName --capabilities CAPABILITY_IAM</code></div>
            <div className="setup-aws-text">7. Setup your server:</div>
            <div>
                    <h4>server.js</h4>
                    <div className="files-div">
                        <pre>{`const express = require('express');
const cloudniite = require('cloudniite');
const app = express();`}</pre>

<pre className = "comments">{`/* Pass in your region, and your poolId
Configure returns a promise.
If you wish to warm up on server start, use the .then method to invoke the other methods. */`}</pre>

<pre>{`cloudniite.configure('region','poolId').then(() => {`}</pre>
<pre className = "commentsAll">{`    //Method for creating tag group/s`}</pre>
<pre>{`     cloudniite.createTagGroup("#HelloWorld", "TestFunction");`}</pre>
<pre className = "commentsAll">{`    //Method for warming up tag group/s`}</pre>
<pre>{`     cloudniite.warmupTagGroup(null,"#HelloWorld");`}</pre>
<pre className = "commentsAll">{`    //Method for warming up function/s`}</pre>
<pre>{`     cloudniite.warmupFunctions(null,"TestFunction");`}</pre>
<pre>{`});`}</pre>

<pre className = "comments">{`//This is a custom route for specifically for development 
//Go to this route to view all your tag groups and AWS Lambda function information`}</pre>

<pre>{`app.get('/getHtmlViz', cloudniite.getHtmlViz);

app.listen(3000, () => {
    console.log("Listening on PORT");
});`}</pre>
                 </div>
                 <br/>
                 <br/>
                 <br/>
                </div>
        </div>
    )
}

export default Tutorial;