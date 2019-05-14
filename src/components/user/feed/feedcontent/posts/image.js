import React from 'react';
import PostActions from '../../../actions/posts/postactions/postactions';
import {Link} from "react-router-dom";

function Image(props) {

    let username = props.username;
    let by = props.by;
    let content = props.content;
    let avatar = process.env.PUBLIC_URL + '/uploads/' + props.avatar;

    return (
        <div className="FeedPost TextPost">
            <div className="FeedPostHeader">
                <Link to={'/profile/' + username}>
                    <span className="byUser">
                        <div className="byUserAvatar" style={{backgroundImage: 'url('+ avatar +')'}}>
                        </div>
                        {by}
                    </span>
                </Link>
            </div>
            <div className="FeedPostContent">
                <div className="FeedPostImage">
                    <img src={content} alt=""/>
                </div>
            </div>
            <PostActions/>
        </div>
    )
}

export default Image;