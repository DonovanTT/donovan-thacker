import React from 'react';

import Headline from '../Headline';

export default function ReactTutorials(){
    return(
        <div>
            <div className="reactPage header">
                <h1> PROJECTS </h1>
            </div>
            <div className="page padded">
                <Headline title="BOTW Clone" author="Donovan Thacker" link={{ pathname: "https://www.mediafire.com/file/5x3wkg5xsag1gww/Exploratory.exe/file" }}/>
            </div>
        </div>
    )
}