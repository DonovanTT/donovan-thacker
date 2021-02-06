import React from 'react';

import Headline from '../Headline';

export default function ReactTutorials(){
    return(
        <div>
            <div className="reactPage header">
                <h1> REACT </h1>
            </div>
            <div className="page padded">
                <Headline title="Starting Your First Project" author="Donovan Thacker" />
            </div>
        </div>
    )
}