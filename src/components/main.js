import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../App.css';

import Navbar from './Navbar';
import Home from './home';
import Footer from './Footer';
import Projects from './pages/Projects'
import Platform from './platform';
import Welcome from './welcome';
import Tutorials from './pages/Tutorials';
import About from './pages/About';
import ReactTutorials from './pages/ReactTutorials';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Welcome" component={Welcome} />
                        <Route path="/Platform" component={Platform} />
                        <Route path="/Tutorials" component={Tutorials} />
                        <Route path="/About" component={About} />
                        <Route path="/ReactTutorials" component={ReactTutorials} />
                        <Route path="/Projects" component={Projects} />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;