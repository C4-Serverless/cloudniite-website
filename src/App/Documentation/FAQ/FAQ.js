import React from 'react';
import './FAQ.css'
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div>
            <h2>FAQ Page</h2>
            <div id="install-aws-outer">
                <div className="install-aws-text">
                    FeedBack:
                </div>
                <div className="feedBackBox">
                    <textarea className="feedBackInput" rows="10" cols="20" name="usrtxt" wrap="hard"></textarea>
                </div>
                <input className="submitButton" type="submit" />
            </div>
        </div>
    )
}

export default FAQ;