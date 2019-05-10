function changeUserSettings(userData) {
    return {
        type: 'CHANGE_USER_SETTINGS',
        payload: userData
    }
}

function getUserData() {
    let userData = {
        username: 'jorik',
        first_name: 'jora',
        last_name: 'pupkin',
        email: 'alin.tabuci@wippo.it'
    };

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