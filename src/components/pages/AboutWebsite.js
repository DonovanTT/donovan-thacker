import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

class AboutWebsite extends Component {
    render() {
        return (
            <div className="page padded">
                <h2> About This Website </h2>
                <br/>
                <p> This website was created with several goals in mind: </p>
                <br/>
                <p> 1. A project for me to work on to become more proficient in React. </p>
                <p> 2. A place to store my notes on React development. </p>
                <p> 3. A crisp personal website to garnish my professional portfolio. </p>
                <br/>
                <p> Moving forward, I would like to add other utilities to the site: </p>
                <br/>
                <p> I want to add a To-Do list and other desk-manager type stuff for my own personal use, and I want it behind authentication anyway so I might as well let anyone use it. </p>
            </div>
        )
    }
}

export default AboutWebsite;