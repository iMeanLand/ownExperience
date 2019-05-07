import React from 'react';
import '../../css/header.css'
import logo from '../../logo.png';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
                <Link className="logo" to="/">
                    <div className="logo" style={{backgroundImage: 'url('+ logo +')'}}>
                    </div>
                </Link>
                <div className="navigation-menu">
                    <ul>
                        <li className="navigationLink">
                            <a href="#">
                                <i className="fas fa-user-friends">
                                </i>
                            </a>
                        </li>
                        <li className="navigationLink">
                            <a href="#">
                                <i className="fas fa-comments">
                                </i>
                            </a>
                        </li>
                        <li className="navigationLink">
                            <a href="#">
                                <i className="fas fa-bell">
                                </i>
                            </a>
                        </li>
                        <li className="navigationLink">
                            <Link to="/groups">
                                <i className="fas fa-users">
                                </i>
                            </Link>
                        </li>
                        <li className="navigationLink">
                            <Link to="/pages">
                                <i className="fas fa-tachometer-alt">
                                </i>
                            </Link>
                        </li>
                        <li className="navigationLink">
                            <Link className="profileBlock" to="/profile">
                                <div className="profileImage" style={{backgroundImage: 'url('+ process.env.PUBLIC_URL + '/uploads/thumb.png' +')'}}>
                                    <i className="fas fa-angle-down"></i>
                                </div>

                            </Link>
                        </li>
                        <li className="navigationLink">
                            <Link to="/kanban">Kanban</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;