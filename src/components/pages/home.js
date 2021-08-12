import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div className = "centered">
                <Link to="/Welcome" className="title">
                    <h3 className="quote">"Rather than reasoning by analogy, you boil things down to the most fundamental truths you can imagine and you reason up from there."</h3>
                    
                    <br/>
                    <h5 className="quoteCred">- Elon Musk</h5>
                </Link>
            </div>
        )
    }
}

export default Home;