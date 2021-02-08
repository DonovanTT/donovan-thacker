import React from 'react';

import { Link } from 'react-router-dom';

export default function Tutorials(){
    return(
        <div>
            <div className="tutorialsPage header">
                <h1> TUTORIALS </h1>
            </div>
            <div className="page padded">
                <h1> <Link to="/ReactTutorials" className="link"> React </Link> </h1>
                <p> Guides for working with the React framework. </p>
                <br/><br/>
            </div>
        </div>
    )
}