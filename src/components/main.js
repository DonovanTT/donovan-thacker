import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './home';
import Platform from './platform';
import Welcome from './welcome';
import Tutorials from './pages/Tutorials'
import About from './pages/About'
import ReactTutorials from './pages/ReactTutorials'
class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Welcome" component={Welcome} />
                    <Route path="/Platform" component={Platform} />
                    <Route path="/Tutorials" component={Tutorials} />
                    <Route path="/About" component={About} />
                    <Route path="/ReactTutorials" component={ReactTutorials} />
                </Switch>
            </div>
        )
    }
}

export default Main;