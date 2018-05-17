import React from 'react';
import {
    Link
  } from 'react-router-dom'

import './Introduction.css'


const Introduction = () => {
    return (
        <div id="introduction">
            <h2>Introduction</h2>
            <h4>Serverless Revolution.</h4>
            <p>
                Wouldn't it be nice if you didn't have to think about servers?
                What if your application could scale up and down with traffic 
                automatically and you only pay for time being used. 
            </p>

            <p>
                The future is here. The serverless revolution is enabling engineers 
                and companies to extract their server problems out and away from their
                projects and companies forever. 

            </p>

            <h4>Serverless is actually service-full.</h4>
            <p>
                Serverless, as a software architecture, requires you to use 3rd party
                services. There are many to choose from: Amazon's AWS, Google's Cloud Platform, Microsoft's
                Azure and many more. These services handle large portions of your application's 
                backend logic. This is great because these companies have teams of amazing engineers dedicated solely to 
                patching and optimizing the servers you are using so you don't have to. 

            </p>

            <h4>Where does Cloudniite fit?</h4>
            <p>
                Cloudniite helps you as a developer optimize and monitor your serverless 
                application performance and metrics on AWS Lambda. We chose AWS because 
                it has an exceptional ecosystem of cloud products and a huge community of developers 
                that are passionate about the future of serverless.  We integrate seamlessly with your 
                application to help you ensure your customers are having a fast and 
                responsive experience. We do this by helping you organize and monitor 
                event-driven AWS Lambda functions. If you are unfamiliar with AWS Lambda, 
                no need to worry, we will cover the core concepts in the next section.   
            </p>

            <h4>What is AWS Lambda?</h4>
            <p>
                AWS Lambda lets you run your own functions on Amazon servers. Pretty simple right? 
                
            </p>

            <p>    
                Want to process a video a user has uploaded into different formats 
                automatically? AWS Lambda can handle it. Want to text a user exactly 24 hours 
                after they have created an account on your website? You can schedule an AWS Lambda
                function to do that. 
            </p>

            <p>    
                You write the code and then let Amazon worry about the performance 
                and execution of it. Best of all, you only pay for when your functions are being used. 
                You don't pay for idle time. This leads to huge cost savings and is one of the 
                most attractive characteristics of building serverless applications. 
            </p>

            <h4>How do you optimize AWS Lambda functions?</h4>
            <p>
                Amazon has to prepare or spin-up, new virtual 
                servers to run your code. This startup time only happens when your 
                functions haven't been run in a while. For Amazon, it doesn't make sense
                to keep your function running on a server if no one is using it. So, after a period
                of time, if your function isn't used, Amazon will "destroy" the server it is living on. 
                This function will now be considered "cold". Cold functions take longer to run and 
                will leave your users waiting longer for a response because of the time it takes to 
                spin up a server to host the function.
            </p>

            <p>
                Developers have been using simple timers to "warmup" their functions 
                so that they stay running and available for users. This solution works 
                but we believed there could be a smarter way to manage and keep your
                Lambda functions warm and performant. 
            </p>

            <h4>Cloudniite Examples.</h4>
            <p>
                Below are a few examples of how you could use our library to 
                minimize cold starts, organize your functions into groups and 
                optimize your application to ensure it responds quickly to user actions. 
            </p>

            <h4>AWS Lambda Function Groups</h4>
            <p>
                Cloudniite lets you easily group your Lambda functions however you like. If you 
                want to make sure all the Lambda functions associated with your landing page are 
                warmed up, simply create a tag group passing in the functions you would like to be 
                grouped together.
                
            </p>
            <code>cloudniite.createTagGroup("#LandingPage","SignupUser","EmailSubscription")</code>

            <p>
                Then, whenever you want to warmup the LandingPage functions, just call our method 
                passing in the tag group name.
            </p>

            <code>lambdaController.warmupTagGroup(null, "#LandingPage");</code>

            <Link to="/documentation/quick-start"><h4>Get Started Installing and Using Cloudniite</h4></Link>

        </div>
    )
}

export default Introduction;