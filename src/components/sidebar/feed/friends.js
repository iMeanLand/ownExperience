import React from 'react';
import postsData from "../../feed/feedcontent/posts/postData";
import {Link} from 'react-router-dom';

function Friends() {
    let value = null;
    return (
        <div className="Friends">
            <div className="FriendsHeader">
                Friends
            </div>
            <div className="FriendsContent">
                {Object.keys(postsData).map(function(key) {
                    {value = postsData[key]}
                return <div className="FriendBlock">
                            <Link to={'/profile/' + key}>
                                <div className="FriendsAvatar"
                                     style={{backgroundImage: 'url("' + process.env.PUBLIC_URL + '/uploads/' + value.avatar + '")'}}></div>
                            </Link>
                           <div className="FriendsUserContent">{value.by}</div>
                       </div>
                })}
            </div>
        </div>
    )
}

export default Friends;