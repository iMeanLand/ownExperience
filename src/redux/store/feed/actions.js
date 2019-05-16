// Some foreign profile
import axios from 'axios';

function setFeedData() {
    return function (dispatch) {
        axios.get(global.apiURL + '/selectposts')
            .then(function(response) {
                return dispatch({
                    type: 'SET_FEED_DATA',
                    payload: response.data
                })
            });
    }
}

function addFeedPost(post_data) {

    let formData = new FormData;
    formData.append('post', post_data);

    axios.post(global.apiURL + '/addpost', formData);

    return {
        type: 'ADD_NEW_POST',
        payload: post_data,
    };
}

function changeFeedPostType(post_type) {
    return {
        type: 'CHANGE_POST_TYPE',
        payload: post_type
    }
}

export {
    setFeedData,
    addFeedPost,
    changeFeedPostType,
}