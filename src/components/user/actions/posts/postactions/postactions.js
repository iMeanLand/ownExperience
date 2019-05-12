import React from 'react';
import Like from './like';
import Comment from './comment';
import Share from './share';

function postactions() {
    return (
        <div className="FeedPostActions">
            <Like />
            <Comment />
            <Share />
        </div>
    )
}

export default postactions;