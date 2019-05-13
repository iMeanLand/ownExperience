import React from 'react';
import '../../../css/main.css';
import '../../../css/welcome.css';
import cookies from "../../../helpers/cookies";
import token from "../../../helpers/token";
import Auth from "../../../helpers/Auth";

class AdminLogin extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        // let username = $('#UsernameInput').val();
        // let password = $('#PasswordInput').val();

        cookies.setCookie('tokenA', token, 30);
        window.location.href = '/admin/dashboard';
    };

    render() {
        return (
            <div className="AdminLoginPage">
                <div className="AdminLoginPageContent">
                    <h1>Admin login Page</h1>
                    <form id="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" placeholder="Username" id="UsernameInput" className="TypeInput" required />
                        <input type="password" placeholder="Password" id="PasswordInput" className="TypeInput" required />
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }

}

export default AdminLogin;