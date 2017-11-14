import React, { Component } from 'react';
import secureRandom from 'secure-random';
import base64url from 'base64-url';
import cookie from 'react-cookies';

class SubmitButton extends Component
{
    static CHANNEL_ID='1479418979';
    static REDIRECT_URI='http://localhost:3000/line/auth';
    static NONCE='nonce';
    
    constructor(props)
    {
        super(props);
        cookie.save('com.linecorp.nonce', SubmitButton.NONCE);
    }
    
    render()
    {
        const token=base64url.encode(secureRandom(32));
        cookie.save('com.linecorp.token', token);
        
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
