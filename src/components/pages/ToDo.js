import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

class ToDo extends Component {
    render() {
        return (
            <div className="page padded">
                <p>Why hello there!</p>
                <p>I'd like to make this a checklist that updates a database...</p>
            </div>
        )
    }
}

export default ToDo;