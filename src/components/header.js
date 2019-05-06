import React from 'react';
import '../css/header.css'
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt='Logo'/>
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li>
                            <Link to="/">Feed</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/kanban">Kanban</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;