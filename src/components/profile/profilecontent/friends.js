import React from 'react';
import Sidebar from '../../sidebar/feed/sidebar';
import ProfileHeader from './profileheader';
import {Link} from "react-router-dom";
import postsData from '../../feed/feedcontent/posts/postData';

function Friends(props) {
    const currentProfile = props.match.params.username;
    let value = null;
    return (
        <div className="Container">
            <ProfileHeader currentProfile={currentProfile}/>
            <div className="PageContainer">
                <div className="PageContainerContent">
                    <div className="PageHeader">
                        Friends
                    </div>
                    <div className="PageContent">
                        <div className="Row">
                            {Object.keys(postsData).map(function(key) {
                                {value = postsData[key]}
                                return (
                                <div key={key} className="ThreeColumn mgBottom text-center">
                                    <div className="FriendBlock">
                                        <Link to={'/profile/' + key}>
                                            <div className="FriendsAvatar"
                                                 style={{backgroundImage: 'url("' + process.env.PUBLIC_URL + '/uploads/' + value.avatar + '")'}}></div>
                                        </Link>
                                        <div className="FriendsUserContent">{value.by}</div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Friends;