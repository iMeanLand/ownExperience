import React from 'react';

function addpost() {
    return (
        <div className="FeedAddPost">
            <div className="FeedAddPostHeader">
                Add post title
            </div>
            <div className="FeedAddPostContent">
                <textarea className="FeedAddPostInput" placeholder="Post something in your time line">
                </textarea>
            </div>
            <div className="FeedPostActions UserAction">
                <span className="FeedAddPostButton"><i className="fas fa-paper-plane"></i></span>
            </div>
        </div>
    )
}

export default addpost;