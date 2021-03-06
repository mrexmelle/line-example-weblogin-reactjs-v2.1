import React, { Component } from 'react';
import cookie from 'react-cookies';

class LineAuth extends Component
{
    constructor(props)
    {
        super(props);
        console.log('LineAuth::constructor');
        const params=new URLSearchParams(props.location.search);
        this.state=params;
    }
    
    render()
    {
        console.log('LineAuth::render - code: ' + this.state.get('code'));
        console.log('LineAuth::render - state: ' + this.state.get('state'));
        console.log('LineAuth::render - error_code: ' + this.state.get('errorCode'));
        console.log('LineAuth::render - error_message: ' + this.state.get('errorMessage'));
        console.log('LineAuth::render - cookie::nonce: ' + cookie.load('com.linecorp.nonce'));
        console.log('LineAuth::render - cookie::token: ' + cookie.load('com.linecorp.token'));
        return (
            <div className="LineAuth">
                <p>code: {this.state.get('code')}</p>
                <p>state: {this.state.get('state')}</p>
                <p>error_code: {this.state.get('errorCode')}</p>
                <p>error_message: {this.state.get('errorMessage')}</p>
            </div>
        );
    }
}

export default LineAuth;
