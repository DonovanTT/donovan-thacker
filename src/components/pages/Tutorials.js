import React from 'react';

import Headline from '../Headline';

export default function Tutorials(){
    return(
        <div>
            <div className="tutorialsPage header">
                <h1> TUTORIALS </h1>
            </div>
            <div className="page padded">
                <h1 className="centered"> React </h1>
                <br/>
                <Headline title="Starting Your First Project" author="Donovan Thacker" />
            </div>
        </div>
    )
}