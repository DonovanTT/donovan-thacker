import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './home';
import Platform from './platform';
import Welcome from './welcome';
import Tutorials from './pages/Tutorials'
import TutorialList from './pages/TutorialList'
import About from './pages/About'

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