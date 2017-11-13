import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import randomString from 'random-string';

class SubmitButton extends Component
{
    static CHANNEL_ID='1479418979';
    static REDIRECT_URI='http://localhost:3000/line/auth';
    static NONCE='nonce';
    
    render()
    {
        var token=randomString({length: 32});
        
        return <div><form action="https://access.line.me/oauth2/v2.1/authorize" method="GET">
            <input type="hidden" name = "response_type" value="code" />
            <input type="hidden" name = "scope" value="openid profile" />
            <input type="hidden" name = "client_id" value={SubmitButton.CHANNEL_ID} />
            <input type="hidden" name = "state" value={token} />
            <input type="hidden" name = "nonce" value={SubmitButton.NONCE} />
            <input type="hidden" name = "redirect_uri" value={SubmitButton.REDIRECT_URI} />
            <input type="submit" />
        </form></div>;
    }
};

export default SubmitButton;