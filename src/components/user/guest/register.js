import React from 'react';
import '../../../css/main.css';
import '../../../css/welcome.css';
// import $ from 'jquery';
import cookies from '../../../helpers/cookies';
import token from '../../../helpers/token';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // let username = $('#UsernameInput').val();
        // let password = $('#PasswordInput').val();

        cookies.setCookie('token', token, 30);

        this.props.history.go('/');

    }

    render() { //
        return (
            <div className="WelcomePage">
                <div className="WelcomePageContent">
                    <h1>Register Page</h1>
                    <form id="RegisterForm" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Username" id="UsernameInput" className="TypeInput" required />
                        <input type="password" placeholder="Password" id="PasswordInput" className="TypeInput" required />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;