import cookies from "./cookies";
import PropTypes from 'prop-types';

class Auth {

    static isAuthenticated = this.checkIfAuthenticated();
    static isAdminAuthenticated = this.checkIfAdminAuthenticated();
    static propTypes = {
        history: PropTypes.object
    };

    static checkIfAuthenticated() {
        if (cookies.getCookie('token')) {
            return true;
        }
    }

    static checkIfAdminAuthenticated() {
        if (cookies.getCookie('tokenA')) {
            return true;
        }
    }

    static logOut() {
        if (Auth.isAuthenticated) {
            cookies.removeCookie('token');
            window.location.href = '/';
        } else if (Auth.isAdminAuthenticated) {
            cookies.removeCookie('tokenA');
            window.location.href = '/admin';
        }

    }

}

export default Auth;