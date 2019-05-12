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
        if (cookies.getCookie('token_a')) {
            return true;
        }
    }

    static redirectIfNotAdminAuthenticated() {
        if (!this.isAdminAuthenticated) {
            window.location.href = '/404';
        }
    }

    static logOut() {
        cookies.removeCookie('token_a');
        cookies.removeCookie('token');

        window.location.href = '/';
        // this.props.history.push('/');

    }

}

export default Auth;