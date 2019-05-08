import React from 'react';
import '../../css/main.css';
import '../../css/welcome.css';
import $ from 'jquery';
import cookies from '../../cookies';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();

        let username = $('#UsernameInput').val();
        let password = $('#PasswordInput').val();

        const user = {
            'username': username,
            'password': password,
            'avatar': null
        };

        cookies.setCookie('user', JSON.stringify(user), 30);

        this.props.history.go('/');

    }

    render() { //
        return (
            <div className="WelcomePage">
                <div className="WelcomePageContent">
                    <h1>Register Page</h1>
                    <form id="RegisterForm" onSubmit={(e) => this.handleSubmit(e)}>
                    {/*<form id="RegisterForm" onSubmit={(e) => this.setFormValues(e)}>*/}
                        {/*<input type="text" placeholder="Username" id="UsernameInput" onChange={(e) => this.setName(e)} className="TypeInput" required />*/}
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