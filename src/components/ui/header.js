import React from 'react';
import '../../css/header.css'
import logo from '../../logo.png';
import {Link, NavLink} from 'react-router-dom';
import globals from '../../globals';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.displayFriendsNotificationsList = this.displayFriendsNotificationsList.bind(this);
    }

    displayFriendsNotificationsList() {
        let element = document.getElementsByClassName('friendsNotificationsList')[0];
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            document.getElementsByClassName('friendsBtn')[0].classList.add('active');
        } else {
            element.classList.add('hidden');
            document.getElementsByClassName('friendsBtn')[0].classList.remove('active');
        }
    }

    HeaderDOM() {
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
                                <a href="#friends" className="friendsBtn" onClick={this.displayFriendsNotificationsList}>
                                    <div className="friendsNotificationsList hidden">
                                        <div className="NotificationsListHeader">
                                            Friends Notifications List
                                        </div>
                                        <div className="NotificationsListContent">
                                            No notifications found
                                        </div>
                                    </div>
                                    <i className="fas fa-user-friends">
                                    </i>
                                </a>
                            </li>
                            <li className="navigationLink">
                                <a href="#chat">
                                    <i className="fas fa-comments">
                                    </i>
                                </a>
                            </li>
                            <li className="navigationLink">
                                <a href="#notifications">
                                    <i className="fas fa-bell">
                                    </i>
                                </a>
                            </li>
                            <li className="navigationLink">
                                <NavLink activeClassName="active" to="/groups">
                                    <i className="fas fa-users">
                                    </i>
                                </NavLink>
                            </li>
                            <li className="navigationLink">
                                <NavLink activeClassName="active" to="/pages">
                                    <i className="fas fa-tachometer-alt">
                                    </i>
                                </NavLink>
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

    render() {

        if (!globals.loggedIn) return null;

        return this.HeaderDOM();

    }


}

export default Header;