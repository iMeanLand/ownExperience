import cookies from "../../../cookies";
let userData = false;
if (cookies.getCookie('user')) userData = JSON.parse(cookies.getCookie('user'));

const _changeAvatar = {
    type: 'CHANGE_AVATAR',
    payload: process.env.PUBLIC_URL + '/uploads/developers.jpg'
};

function getUserData() {
    return {
        type: 'GET_USER_DATA',
        payload: userData
    }
}


function changeAvatar() {
    return _changeAvatar;
}


export {
    changeAvatar,
    getUserData
}