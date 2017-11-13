import React, { Component } from 'react';
import LineAuth from './line_auth';
import Welcome from './welcome';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component
{
    render()
    {
        console.log('App::render - start');
        return (
            <BrowserRouter>
                <div>
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/line/auth" component={LineAuth} />
                </div>
            </BrowserRouter>
        );
    }
};

export default App;
