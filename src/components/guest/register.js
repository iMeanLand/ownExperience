import React from 'react';
import '../../css/main.css';
import '../../css/welcome.css';
import $ from 'jquery';

class Register extends React.Component {

    constructor(props) {
        super(props);

    }

    handleSubmit(e) {
        e.preventDefault();
        $('.TypeInput').val('');

        let username = $('#UsernameInput').val();
        let password = $('#PasswordInput').val();

        const data = {
            username: username,
            password: password
        };

        fetch('/register')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
    }

    render() {
        return (
            <div className="WelcomePage">
                <div className="WelcomePageContent">
                    <h1>Register Page</h1>
                    <form id="RegisterForm">
                        <input type="text" placeholder="Username" id="UsernameInput" className="TypeInput" required />
                        <input type="password" placeholder="Password" id="PasswordInput" className="TypeInput" required />
                        <input type="submit" onSubmit={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;