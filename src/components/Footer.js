import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Really, he was.
                </p>
                <p className="footer-subscription-text">
                    Thanks for clicking! This website was developed with React. I'm looking for work as a Junior Software Engineer, if you're hiring! The link to this website's GitHub repository can be found below!
                </p>
                <p className="footer-subscription-text">
                    Or, if you are in the market for a new website for you or your business at reasonable expense, don't hesitate to contact me!
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
                        <h2>Connect</h2>
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
