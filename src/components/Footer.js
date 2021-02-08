import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Epic Footer with Great Content
                </p>
                <p className="footer-subscription-text">
                    ...
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Cynicism" className="footer-input"/>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to="/About">About Me</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                        <Link to="/Platform">Platform</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
