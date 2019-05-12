import React from 'react';
import '../../../css/header.css'
import logo from '../../../logo.png';
import {Link, NavLink} from 'react-router-dom';
import {setAdminData} from '../../../redux/store/admin/actions';
import {connect} from 'react-redux';
import Auth from "../../../helpers/Auth";

function mappingData(state) {
    return {
        admin: state.adminReducer
    };

}

const mapDispatchToComponent = {
    setAdminData,
};


class AdminHeader extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }


    preload() {
        window.onload = function () {
            let preloader = document.getElementById('loadingBar');
            preloader.style.display = 'block';
            preloader.style.width = '100%';
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 500)
        }
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
        this.preload();
        let name = this.props.admin.username;
        if (!Auth.isAdminAuthenticated) return null;
        return (
            <header>
                <nav>
                    <Link className="logo" to="/admin/dashboard">
                        <div className="logo" style={{backgroundImage: 'url(' + logo + ')'}}>
                        </div>
                    </Link>
                    <div className="navigation-menu">
                        <ul>
                            <li className="navigationLink">
                                <NavLink activeClassName="active" to="/admin/dashboard">
                                    <i className="fas fa-tachometer-alt">
                                    </i>
                                </NavLink>
                            </li>
                            <li className="navigationLink">
                                <span className="profileBlock">
                                    <div className="profileImage"
                                         onClick={this.handleProfileDropdown}
                                         style={{backgroundImage: 'url(/uploads/univers.jpg)'}}>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                    <ul className="profileMenuDropdown hidden" onClick={this.handleCloseDropdown}>
                                        <li>
                                            <NavLink activeClassName='active' className="DropDownMenuBtn"
                                                     to="/admin/settings">Settings</NavLink>
                                        </li>
                                        <li>
                                            <span className="DropDownMenuBtn LogoutBtn" onClick={Auth.logOut}>
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
        if (!Auth.isAdminAuthenticated) return null;
        return this.HeaderDOM();
    }

}

export default connect(mappingData, mapDispatchToComponent)(AdminHeader);