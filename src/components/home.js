import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className = "Centered">
                <Link to="/Welcome" className="Title"> <h2>Donovan was here.</h2> </Link>
            </div>
        )
    }
}

export default Home;