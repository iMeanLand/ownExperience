import React from 'react';
import '../../../css/sidebar.css';
import FriendsActivity from './friendsactivity';
import Friends from './friends';

function Sidebar() {
    return(
        <div className="Sidebar">
            <FriendsActivity/>
            <Friends/>
            <div className="Advertisement">
                <div className="AdvertisementHeader">
                    <h3>Just an Add</h3>
                </div>
                <div className="AdvertisementContent">
                    <p>Some text content here</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;