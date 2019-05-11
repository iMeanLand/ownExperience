function changeUserSettings(userData) {
    return {
        type: 'CHANGE_USER_SETTINGS',
        payload: userData
    }
}

let userData = {
    avatar: process.env.PUBLIC_URL + '/uploads/thumb.png',
    username: 'jorik',
    first_name: 'jora',
    last_name: 'pupkin',
    email: 'alin.tabuci@wippo.it'
};

function getUserData() {
    return {
        type: 'GET_USER_DATA',
        payload: userData
    }
}

function changeAvatar() {
    return {
        type: 'CHANGE_AVATAR',
        payload: process.env.PUBLIC_URL + '/uploads/developers.jpg'
    }
}

export {
    changeAvatar,
    changeUserSettings,
    getUserData
}