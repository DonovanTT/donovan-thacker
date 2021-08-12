import React from 'react';

import Headline from '../Headline';

export default function Projects(){
    return(
        <div>
            <div className="reactPage header">
                <h1> React Tutorials </h1>
            </div>
            <div className="page padded">
                <Headline title="Starting Your First Project" author="Donovan Thacker" link="/Projects"/>
            </div>
        </div>
    )
}