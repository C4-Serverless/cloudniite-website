import React from 'react';
import './Introduction.css'

const Introduction = () => {
    return (
        <div id="introduction">
            <h3>Introduction</h3>
            <h5>Serverless Revolution.</h5>
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

            <h6>Serverless is actually service-full.</h6>
            <p>
                Serverless, as a software architecture, requires you to use 3rd party
                services. There are many: Amazon's AWS, Google's Cloud Platform, Microsoft's
                Azure and many more. These services handle large portions of your application's 
                backend logic. This is great because these companies have teams of amazing engineers dedicated solely to 
                patching and optimizing the servers you are using. 

            </p>

            <h5>Where does Cloudniite fit?</h5>
            <p>
                Cloudniite helps you as a developer optimize and monitor your serverless 
                application performance and metrics on AWS Lambda. We chose AWS because 
                it has an exceptional ecosystem of cloud products and a community of developers 
                that are passionate about the future of serverless.  We integrate seamlessly with your 
                application to help you ensure your customers are having a fast and 
                responsive experience. We do this by helping you organize and monitor 
                event-driven AWS Lambda functions. If you are unfamiliar with AWS Lambda, 
                no need to worry, we will cover the core concepts in the next section.   
            </p>

            <h5>What is AWS Lambda?</h5>
            <p>
                AWS Lambda lets you run your functions on Amazon servers. Pretty simple right? 
                Now, this code can do pretty much 
                anything (ok not "anything" but a lot of stuff, you get the idea). 
            </p>

            <p>    
                Want to process a video a user has uploaded into different formats 
                automatically? AWS Lambda can handle it. Want to text a user exactly 24 hours 
                after they have created an account on your website? You can schedule an AWS Lambda
                function to do that. You write the code and then let Amazon worry about the performance 
                and execution of it. Best of all, you only pay for when your functions are being used. 
                You don't pay for idle time. This leads to huge cost savings and is one of the 
                most attractive characteristics of building serverless applications. 
            </p>

            <h5>How do you optimize AWS Lambda functions?</h5>
            <p>
                Amazon has to prepare or spin-up, new virtual 
                servers to run your code. This startup time only happens when your 
                functions haven't been run in a while. For Amazon, it doesn't make sense
                to keep your function running on a server if no one is using it. So, after a period
                of time, if your function isn't used, Amazon will "destroy" the server it is living on. 
                This function will now be considered "cold". Cold functions take longer to run and 
                will leave your users waiting longer for a response. This is because cold functions need 
                additional time to run because of the initial time it takes to spin up a server to host the function.
            </p>

            <h5>Core concepts and examples.</h5>
            <p>
                Below are a few examples of how you could use our library to 
                minimize cold starts and optimize your AWS Lambda functions to 
                respond quickly to user actions. 
                
            </p>
        </div>
    )
}

export default Introduction;