import cookies from "../../../cookies";

const userData = JSON.parse(cookies.getCookie('user'));
const getUserData = {
    type: 'GET_USER_DATA',
    payload: userData
};

const _changeAvatar = {
    type: 'CHANGE_AVATAR',
    payload: process.env.PUBLIC_URL + '/uploads/developers.jpg'
};


function changeAvatar() {
    return _changeAvatar;
}


export {
    changeAvatar,
    getUserData
}