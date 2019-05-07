import React from 'react';
import '../../css/profile.css';
import ProfileContent from './profilecontent/profilecontent';

function Profile() {
    return (
        <div className="Container">
            <div className="ProfileCover"
                 style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/uploads/cover.jpg)'}}>
                <div className="ProfileAvatar"
                     style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/uploads/thumb.png)'}}>
                    <div className="ProfileName">Alin Tabuci</div>
                </div>
            </div>
            <ProfileContent/>
        </div>
    )
}

export default Profile;