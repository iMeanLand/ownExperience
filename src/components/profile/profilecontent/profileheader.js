import React from 'react';
import {Link, NavLink} from "react-router-dom";

function ProfileHeader() {

    return (
        <div className="ProfileCover"
             style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/uploads/cover.jpg)'}}>
            <div className="ProfileAvatar"
                 style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/uploads/thumb.png)'}}>
                <div className="ProfileName">Alin Tabuci</div>
            </div>
            <div className="ProfileMenu">
                <ul>
                    <li>
                        <NavLink exact to="/profile">
                            Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile/gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile/friends">
                            Friends
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile/groups">
                            Groups
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileHeader;