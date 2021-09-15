import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import { Helmet } from 'react-helmet';

const TITLE = 'Donovan Thacker Resume';

class Resume extends Component {
    render() {
        return (
            <div className="page padded">

                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>

                <h3> Techs I Use: </h3>
            </div>
        )
    }
}

export default Resume;