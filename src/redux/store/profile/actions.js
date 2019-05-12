// Some foreign profile
import postData from "../../../components/user/feed/feedcontent/posts/postData";

function setProfileUserData(profile) {
    return {
        type: 'SET_PROFILE_USER_DATA',
        payload: postData[profile]
    }
}

function setProfileAvatar() {
    return {
        type: 'SET_PROFILE_AVATAR',
        payload: 'developers.jpg'
    }
}

export {
    setProfileUserData,
    setProfileAvatar
}
