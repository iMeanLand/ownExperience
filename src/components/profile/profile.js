import React from 'react';
import '../../css/profile.css';
import ProfileContent from './profilecontent/profilecontent';
import ProfileHeader from "./profilecontent/profileheader";

function Profile() {
    return (
        <div className="Container">
            <ProfileHeader/>
            <ProfileContent/>
        </div>
    )
}

export default Profile;