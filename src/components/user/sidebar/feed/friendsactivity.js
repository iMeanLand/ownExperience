import React from 'react';
import postsData from '../../feed/feedcontent/posts/postData';
import {Link} from "react-router-dom";

function FriendsActivity() {
    let value = '';

    return (
        <div className="FriendsActivity">
            <div className="FriendsActivityHeader">
                Friends Activity
            </div>
            <div className="FriendsActivityContent">
                {Object.keys(postsData).map((key, i) => {
                    value = postsData[key];
                    return (
                        <div key={key} className="FriendsActivityBlock">
                            <Link to={'/profile/' + key}>
                                <div className="FriendsActivityAvatar"
                                     style={{backgroundImage: 'url("' + value.avatar + '")'}}></div>
                            </Link>
                            <div className="FriendsActivityUserContent">{value.by}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FriendsActivity;