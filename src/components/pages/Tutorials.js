import React from 'react';
import { Link } from 'react-router-dom';

export default function Tutorials(){
    return(
        <div className="tutorials">
            <h1 >
                <Link to="/TutorialList" className="tutorial-link"> TUTORIALS </Link>
            </h1>
        </div>
    )
}