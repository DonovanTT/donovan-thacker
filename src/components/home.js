import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        }

        return (
            <div>
                <Link to="/Welcome" style={linkStyle}> <h2>Donovan was here</h2> </Link>
            </div>
        )
    }
}

export default Home;