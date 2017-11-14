import React, { Component } from 'react';
import SubmitButton from './submit_button.js';

class Welcome extends Component
{
    constructor(props)
    {
        super(props);
        console.log('Welcome::constructor');

    }
    
    render()
    {
        return (
            <div className="Welcome">
                <SubmitButton />
            </div>
        );
    }
};

export default Welcome;
