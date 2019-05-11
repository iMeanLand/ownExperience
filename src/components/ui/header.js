import React from 'react';
import '../../css/header.css'
import logo from '../../logo.png';
import {Link, NavLink} from 'react-router-dom';
import cookies from "../../cookies";
import {setMiscAvatar, setUserData} from '../../redux/store/user/actions';
import {connect} from 'react-redux';

function mappingData(state) {
    return {
        user: state.userReducer
    };

}

const mapDispatchToComponent = {
    setMiscAvatar,
    setUserData
};


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.displayFriendsNotificationsList = this.displayFriendsNotificationsList.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.props = props;
    }

    componentDidMount() {
        this.props.setUserData();
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

    handleLogout() {
        cookies.removeCookie('token');
        window.location.href = '/';
    }

    handleProfileDropdown() {
        let element = document.getElementsByClassName('profileMenuDropdown')[0];
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            document.getElementsByClassName('profileImage')[0].classList.add('active');
        } else {
            element.classList.add('hidden');
            document.getElementsByClassName('profileImage')[0].classList.remove('active');
        }
    }

    handleCloseDropdown() {
        let element = document.getElementsByClassName('profileMenuDropdown')[0];
        element.classList.add('hidden');
        document.getElementsByClassName('profileImage')[0].classList.remove('active');
    }

    HeaderDOM() {
        let name = this.props.user.username;

        if (this.props.user.first_name !== null && this.props.user.last_name !== null) {
            name = this.props.user.first_name + ' ' + this.props.user.last_name;
        }

        return (
            <header>
                <nav>
                    <Link className="logo" to="/">
                        <div className="logo" style={{backgroundImage: 'url(' + logo + ')'}}>
                        </div>
                    </Link>
                    <div className="navigation-menu">
                        <ul>
                            <li className="navigationLink">
                                <a href="#friends" className="friendsBtn"
                                   onClick={this.displayFriendsNotificationsList}>
                                    <i className="fas fa-user-friends">
                                    </i>
                                </a>
                                <div className="friendsNotificationsList hidden">
                                    <div className="NotificationsListHeader">
                                        Friends Notifications List
                                    </div>
                                    <div className="NotificationsListContent">
                                        No notifications found
                                    </div>
                                </div>
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
                                <span className="profileBlock">
                                    <div className="profileImage"
                                         onClick={this.handleProfileDropdown}
                                         style={{backgroundImage: 'url(' + this.props.user.avatar + ')'}}>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                    <ul className="profileMenuDropdown hidden" onClick={this.handleCloseDropdown}>
                                        <li>
                                            <NavLink className="DropDownMenuBtn" activeClassName="active" to={'/profile/' + this.props.user.username}>
                                                {name}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName='active' className="DropDownMenuBtn"
                                                     to="/kanban">Kanban</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName='active' className="DropDownMenuBtn"
                                                     to="/settings">Settings</NavLink>
                                        </li>
                                        <li>
                                            <span className="DropDownMenuBtn LogoutBtn" onClick={this.handleLogout}>
                                                Log out
                                            </span>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

    render() {
        if (!global.token) return null;
        return this.HeaderDOM();
    }


}

export default connect(mappingData, mapDispatchToComponent)(Header);

