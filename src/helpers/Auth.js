import cookie from "react-cookies";
import PropTypes from 'prop-types';

class Auth {

    static isAuthenticated = this.checkIfAuthenticated();
    static isAdminAuthenticated = this.checkIfAdminAuthenticated();
    static propTypes = {
        history: PropTypes.object
    };

    static checkIfAuthenticated() {
        if (cookie.load('token')) {
            return true;
        }
    }

    static checkIfAdminAuthenticated() {
        if (cookie.load('token_a')) {
            return true;
        }
    }

    static logOut() {
        if (Auth.isAuthenticated) {
            cookie.remove('token');
            window.location.href = '/login';
        } else if (Auth.isAdminAuthenticated) {
            cookie.remove('token_a');
            window.location.href = '/login';
        }

    }

}

export default Auth;