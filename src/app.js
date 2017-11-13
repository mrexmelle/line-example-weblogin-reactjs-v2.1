import React, { Component } from 'react';
import Welcome from './welcome';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Route path="/welcome" component={Welcome} />
            </BrowserRouter>
        );
    }
};

export default App;
