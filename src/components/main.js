import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './welcome';
import Home from './home'

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Welcome" component={Welcome} />
                </Switch>
            </div>
        )
    }
}

export default Main;