import React from 'react';
import PostActions from '../../../actions/posts/postactions/postactions';
import {Link} from "react-router-dom";

function Video(props) {

    let username = props.username;
    let by = props.by;
    let content = props.content;
    let additional_content = props.additional_content;
    let avatar = props.avatar;

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
                <p>
                    {content}
                </p>
                <div className="FeedPostImage">
                    <a href={additional_content} target="_blank" title={additional_content}>{additional_content}</a>
                </div>
            </div>
            <PostActions/>
        </div>
    )
}

export default Video;