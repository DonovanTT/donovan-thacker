import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        const divStyle = {
            margin: '40px',
            padding: '20px',
            border: '5px solid white'
        };

        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        }

        return (
            <div style = {divStyle}>
                <h2> Hello! </h2>
                <p>I created this website so I could learn React. It's basically a library for my notes and a playground for my experiments. If by some chance you are not me, I hope you find whatever you're looking for!</p>
                <Link to="/" style={linkStyle}> <h4>Back home</h4> </Link>
            </div>
        )
    }
}

export default Welcome;