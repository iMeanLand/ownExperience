import React from 'react';
import postsData from "../../feed/feedcontent/posts/postData";

function Friends() {

    const Friends = postsData.map((value) => (
        <div className="FriendBlock">
            <div className="FriendsAvatar"
                 style={{backgroundImage: 'url("'+ process.env.PUBLIC_URL + '/uploads/' + value.image +'")'}}></div>
            <div className="FriendsUserContent">{value.by}</div>
        </div>
    ));

    return (
        <div className="Friends">
            <div className="FriendsHeader">
                Friends
            </div>
            <div className="FriendsContent">
                {Friends}
            </div>
        </div>
    )
}

export default Friends;