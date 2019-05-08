import cookies from './cookies';
const userData = JSON.parse(cookies.getCookie('user'));
console.log(userData);

const globals = {
        // If user is logged in or not
        'user': {
            'username': userData.username,
            'password': userData.password,
            'avatar': userData.avatar
        }
};

if (!userData) globals.user = null;

export default globals;