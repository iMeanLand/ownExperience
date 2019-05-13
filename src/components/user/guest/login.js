import React from 'react';
import '../../../css/main.css';
import '../../../css/welcome.css';
import cookies from "../../../helpers/cookies";
import token from '../../../helpers/token';
import {NavLink} from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

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
                    <div className="WelcomeLogo">
                        <img src="/uploads/univers_logo.png" alt=""/>
                        <div className="WelcomeHeading">
                            <h1>Bun venit</h1>
                            <p>în rețeaua noastră de socializare</p>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="TwoColumn WelcomePageMainImage">
                            <img src="/uploads/welcome_image.png" alt=""/>
                        </div>
                        <div className="TwoColumn WelcomePageForm">
                            <form id="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="FormLinks">
                                    <NavLink activeClassName="active" className="ChangeFormLink" to="/login">
                                        Logare
                                    </NavLink>
                                    <NavLink activeClassName="active" className="ChangeFormLink" to="/register">
                                        Inregistrare
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
                    <div className="WelcomeFooter">
                        <div className="Row">
                            <div className="ThreeColumn text-center">
                                <img src="/uploads/first_footer_block.png" alt=""/>
                                Conectează-te cu familia și prietenii tăi, împărtășiți momentele voastre
                            </div>
                            <div className="ThreeColumn text-center">
                                <img src="/uploads/second_footer_block.png" alt=""/>
                                Împărtășește noile momente din viața cu prietenii tăi
                            </div>
                            <div className="ThreeColumn text-center">
                                <img src="/uploads/three_footer_block.png" alt=""/>
                                Descoperă oameni noi, creează noi conexiuni și fă-ți noi prieteni
                            </div>
                        </div>
                    </div>
                    <div className="WelcomeBottomFooter">
                        <div className="BottomFooterBlock">
                            Termeni de Utilizare
                        </div>
                        <div className="BottomFooterBlock">
                            Politica de Confidentialitate
                        </div>
                        <div className="BottomFooterBlock">
                            Cookie Policy
                        </div>
                        <div className="BottomFooterBlock">
                            Refund Policy
                        </div>
                        <div className="BottomFooterBlock">
                            Contact details
                        </div>
                        <div className="BottomFooterBlock">
                            Limba
                        </div>
                        <div className="BottomFooterBlock">
                            Copyright © 2019 . Toate drepturile rezervate.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;