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

    static redirectIfIsAuthenticated() {
        if (this.isAuthenticated || this.isAdminAuthenticated) {
            window.location.href = '/';
        }
    }

    static checkIfAdminAuthenticated() {
        if (cookies.getCookie('tokenA')) {
            return true;
        }
    }

    static redirectIfNotAdminAuthenticated() {
        if (!this.isAdminAuthenticated) {
            window.location.href = '/404';
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