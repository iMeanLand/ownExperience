import React from 'react';
import '../../../css/main.css';
import '../../../css/welcome.css';
import {NavLink} from "react-router-dom";
import Auth from "../../../helpers/Auth";

class AdminLogin extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        // let username = $('#UsernameInput').val();
        // let password = $('#PasswordInput').val();

        Auth.login_admin();
        window.location.href = '/admin/dashboard';
    };

    render() {
        return (
            <div className="WelcomePage">
                <div className="WelcomePageContent">
                    <div className="WelcomeLogo">
                        <img src="/uploads/univers_logo.png" alt=""/>
                        <div className="WelcomeHeading">
                            <h1>Bun venit</h1>
                            <p>în rețeaua noastră de socializare</p>
                        </div>
                    </div>
                    <div className="Row">

                        <div className="OneColumn WelcomePageForm Admin">
                            <form id="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="FormLinks">
                                    <NavLink activeClassName="active" className="ChangeFormLink" to="/admin">
                                        Logare
                                    </NavLink>
                                </div>
                                <input type="text" placeholder="Utilizator" id="UsernameInput" className="One TypeInput"
                                       required/>
                                <input type="password" placeholder="Parola" id="PasswordInput" className="Two TypeInput"
                                       required/>
                                <input className="WelcomePageFormSubmit" type="submit" value="Autentificare"/>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}

export default AdminLogin;