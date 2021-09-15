import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button'
import { Dropdown } from './Dropdown'
import './Navbar.css'
import '../App.css';

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
        setDropdown(false);
    }

    return (
        <nav className="navbar sticky">
            <Link to="/" className='navbar-logo shocking' onClick={closeMobileMenu}> 
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

                <li className="nav-item">
                    <Link to="/Resume" className="nav-links" onClick={closeMobileMenu}>
                        Resume
                    </Link>
                </li>

                {/* 
                <li className="nav-item">
                    <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>

                <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave = {onMouseLeave}
                >
                    <Link to="/tutorials" className="nav-links" onClick={closeMobileMenu}>
                        Services <i className = "fas fa-caret-down" />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                */}

                <li className="nav-item">
                    <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;