// Some foreign profile
import feedData from "../../../components/user/feed/feedcontent/posts/feed";

function setFeedData() {
    return {
        type: 'SET_FEED_DATA',
        payload: feedData
    }
}

function addFeedPost(post_data) {
    return {
        type: 'ADD_NEW_POST',
        payload: post_data,
    };
}

// function

export {
    setFeedData,
    addFeedPost
}