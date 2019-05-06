import React from 'react';
import postsData from '../../feed/feedcontent/posts/postData';

function FriendsActivity() {

    const FriendsAcivity = postsData.map((value) => (
        <div className="FriendsActivityBlock">
            <div className="FriendsActivityAvatar" style={{backgroundImage: 'url("'+ process.env.PUBLIC_URL + '/uploads/' + value.image +'")'}}></div>
            <div className="FriendsActivityUserContent">{value.by}</div>
        </div>
    ));

    return (
        <div className="FriendsActivity">
            <div className="FriendsActivityHeader">
                Friends Activity
            </div>
            <div className="FriendsActivityContent">
                {FriendsAcivity}
            </div>
        </div>
    )
}

export default FriendsActivity;