function changeUserSettings(userData) {
    return {
        type: 'CHANGE_USER_SETTINGS',
        payload: userData
    }
}

let userData = {
    avatar: process.env.PUBLIC_URL + '/uploads/thumb.png',
    username: 'jora.pupkin',
    first_name: 'jora',
    last_name: 'pupkin',
    email: 'alin.tabuci@wippo.it',
    token: 'y08fh3jyvlm09cpa9958uv'
};

// Current logged in user data
function setUserData() {
    return {
        type: 'GET_USER_DATA',
        payload: userData
    }
}

function setMiscAvatar(avatar) {
    return {
        type: 'SET_MISC_AVATAR',
        payload: process.env.PUBLIC_URL + '/uploads/' + avatar
    }
}

export {
    setMiscAvatar,
    changeUserSettings,
    setUserData,
}