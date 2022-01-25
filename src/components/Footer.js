import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 350,
            marginBottom: 10
        }}
    />
);

function footer() {
    return (
        <div className="footer-container">
            {/*<div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Home</h2>
                    </div>
                    <div className="footer-link-items">
                        <h2>Resume</h2>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                    </div>
                    <div className="footer-link-items">
                        <h2>Resources</h2>
                    </div>
                </div>
            </div>

            <ColoredLine color="white"/>*/}

            <p className="footer-subscription-heading">
                <h6>© Donovan Thacker, 2021 - all rights reserved</h6>
            </p>
        </div>
    )
}

export default footer
