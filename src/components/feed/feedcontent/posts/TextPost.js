import React from 'react';
import PostActions from '../../../actions/posts/postactions/postactions';

function TextPost(props) {

    let by = props.by;
    let content = props.content;
    let avatar = process.env.PUBLIC_URL + '/uploads/' + props.avatar;

    return (
        <div className="FeedPost TextPost">
            <div className="FeedPostHeader">
                <span className="byUser">
                    <div className="byUserAvatar" style={{backgroundImage: 'url('+ avatar +')'}}>
                    </div>
                    {by}
                </span>
            </div>
            <div className="FeedPostContent">
                {content}
            </div>
            <PostActions/>
        </div>
    )
}

export default TextPost;