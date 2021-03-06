import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button'
import { Dropdown } from './Dropdown'
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    }

    return (
        <nav className="navbar sticky">
            <Link to="/" className="navbar-logo"> 
                DONOVAN 
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave = {onMouseLeave}
                >
                    <Link to="/tutorials" className="nav-links" onClick={closeMobileMenu}>
                        Tutorials <i className = "fas fa-caret-down" />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>

                <li className="nav-item">
                    <Link to="/connect" className="nav-links" onClick={closeMobileMenu}>
                        Connect
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/connect" className="nav-links-mobile" onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    )
}

export default Navbar;