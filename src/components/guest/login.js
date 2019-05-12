import React from 'react';
import '../../css/main.css';
import '../../css/welcome.css';
// import $ from 'jquery';
import cookies from "../../cookies";
import token from '../../token';

class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();


        // let username = $('#UsernameInput').val();
        // let password = $('#PasswordInput').val();

        cookies.setCookie('token', token, 30);

        this.props.history.go('/');
    };

    render() {
        return (
            <div className="WelcomePage">
                <div className="WelcomePageContent">
                    <h1>Login Page</h1>
                    <form id="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" placeholder="Username" id="UsernameInput" className="TypeInput" required />
                        <input type="password" placeholder="Password" id="PasswordInput" className="TypeInput" required />
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;