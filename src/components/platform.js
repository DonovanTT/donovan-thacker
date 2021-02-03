import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

import Navbar from './Navbar';

class Platform extends Component {
    render() {
        return (
            <div className="Platform Padded">
                <Link to="/" className="Link"> <h4>Creating this website</h4> </Link>
                <p>Oh, I see...</p>
            </div>
        )
    }
}

export default Platform;