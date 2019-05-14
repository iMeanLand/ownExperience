import cookie from "react-cookies";
import PropTypes from 'prop-types';
import token from "./token";

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

    static login() {
        cookie.save('token', token, 1);
    }

    static login_admin() {
        cookie.save('token_a', token, 1);
    }

    static register() {
        cookie.save('token', token, 1);
    }

}

export default Auth;