import cookies from "../cookies";

let userData = false;

if (cookies.getCookie(('user'))) {
    userData = JSON.parse(cookies.getCookie('user'));
}

export default userData;