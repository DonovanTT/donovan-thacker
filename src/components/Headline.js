import React from 'react';

export default function Headline(props){
    return(
        <div className="headline">
            <h3 className="headline-title">{props.title}</h3>
            <h5> By {props.author} </h5>
        </div>
    )
}