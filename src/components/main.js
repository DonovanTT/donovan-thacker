import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar.js';
import Home from './home.js';
import Platform from './platform.js';
import Welcome from './welcome.js';
import Tutorials from './pages/Tutorials.js'
import TutorialList from './pages/TutorialList.js'
import About from './pages/About.js'

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
                    <Route path="/TutorialList" component={TutorialList} />
                    <Route path="/About" component={About} />
                </Switch>
            </div>
        )
    }
}

export default Main;