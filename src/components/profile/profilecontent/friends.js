import React from 'react';
import Sidebar from '../../sidebar/feed/sidebar';
import ProfileHeader from './profileheader';
import UserData from '../../feed/feedcontent/posts/postData';

function Friends() {

    const Friends = UserData.map((value) => (
        <div className="ThreeColumn">
            <div className="FriendBlock text-center">
                <div className="FriendsAvatar"
                     style={{backgroundImage: 'url("' + process.env.PUBLIC_URL + '/uploads/' + value.image + '")'}}></div>
                <div className="FriendsUserContent mgBottom">{value.by}</div>
            </div>
        </div>
    ));

    return (
        <div className="Container">
            <ProfileHeader/>
            <div className="PageContainer">
                <div className="PageContainerContent">
                    <div className="PageHeader">
                        Friends
                    </div>
                    <div className="PageContent">
                        <div className="Row">
                            {Friends}
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Friends;