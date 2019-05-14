import React from 'react'
import {NavLink} from "react-router-dom";
import '../../../../css/sidebar.css';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="PageHeader">
                Select a step
            </div>
            <div className="PageContent">
                <NavLink exact className="sidebarLink" activeClassName="active" to="/advertisements">
                    <i className="fas fa-exclamation-circle"></i> Explanation
                </NavLink>
                <NavLink exact className="sidebarLink" activeClassName="active" to="/advertisements/info">
                    <i className="fas fa-info-circle"></i> Information & Rules
                </NavLink>
                <NavLink exact className="sidebarLink" activeClassName="active" to="/advertisements/publish">
                    <i className="fas fa-upload"></i> Publish an advertisement
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;