import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

class Platform extends Component {
    render() {
        return (
            <div className="page platform padded">
                <Link to="/" className="Link"> <h4>Creating this website</h4> </Link>
                <p>Oh, I see...</p>
            </div>
        )
    }
}

export default Platform;