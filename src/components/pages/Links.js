import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import { Helmet } from 'react-helmet';

const TITLE = "Donovan's Links";

class Links extends Component {
    render() {
        return (
            <div className="page padded">

                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>

                <a href={"mailto:" + "donovantthacker@gmail.com"}>
                <h3> Email: </h3>
                <h6>donovantthacker@gmail.com</h6>
                </a>

                <br/>
                <br/>

                <a href="https://www.linkedin.com/in/donovantthacker" target="_blank">
                <h3> LinkedIn: </h3>
                <h6>www.linkedin.com/in/donovantthacker</h6>
                </a>

                <br/>
                <br/>

                <a href="https://github.com/DonovanTT" target="_blank">
                <h3> GitHub: </h3>
                <h6>https://github.com/DonovanTT</h6>
                </a>
                
            </div>
        )
    }
}

export default Links;