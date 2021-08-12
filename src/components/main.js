import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/home';
import Projects from './pages/Projects'
import ToDo from './pages/ToDo';
import Welcome from './pages/welcome';
import Tutorials from './pages/Tutorials';
import ReactTutorials from './pages/ReactTutorials';
import AboutWebsite from './pages/AboutWebsite';
import AboutMe from './pages/AboutMe';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Welcome" component={Welcome} />
                        <Route path="/ToDo" component={ToDo} />
                        <Route path="/Tutorials" component={Tutorials} />
                        <Route path="/AboutMe" component={AboutMe} />
                        <Route path="/ReactTutorials" component={ReactTutorials} />
                        <Route path="/Projects" component={Projects} />
                        <Route path="/AboutWebsite" component={AboutWebsite} />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;