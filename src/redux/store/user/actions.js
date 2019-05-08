import cookies from "../../../cookies";



const getUserData = () => {
    const userData = JSON.parse(cookies.getCookie('user'));

    return {
      type: 'GET_USER_DATA',
      data: userData
    }
};

const changeAvatar = {
    type: 'CHANGE_AVATAR',
    payload: 'developers.jpg'
};

export {
    changeAvatar,
    getUserData
}