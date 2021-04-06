import React from 'react';
import { Link } from 'react-router-dom'

export default function Headline(props){
    return(
        <div className="headline">
            <h3 className="headline-title"><Link to={props.link} target="_blank">{props.title}</Link></h3>
            <h5> By {props.author} </h5>
        </div>
    )
}