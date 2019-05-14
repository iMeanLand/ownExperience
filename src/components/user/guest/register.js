import React from 'react';
import '../../../css/main.css';
import '../../../css/welcome.css';
import cookie from "react-cookies";
// import $ from 'jquery';
import token from '../../../helpers/token';
import {NavLink} from "react-router-dom";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // let username = $('#UsernameInput').val();
        // let password = $('#PasswordInput').val();

        cookie.save('token', token, 30);
        this.props.history.go('/');

    }

    render() { //
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
                                <input type="email" placeholder="Email" id="EmailInput" className="Three TypeInput"
                                       required/>
                                <input type="text" placeholder="Captcha" id="CatpchaInput" className="Four TypeInput"
                                       required/>
                                <div className="FormCheckboxes">
                                    <label>
                                        <input type="checkbox"/>
                                        Am citit si sunt de acord cu Termeni de Utilizare, Politică de
                                        confidențialitate, Politica Cookie
                                    </label>
                                    <br/>
                                    <br/>
                                    <label>
                                        <input type="checkbox"/>
                                        Am peste 16 ani
                                    </label>
                                </div>
                                <input className="WelcomePageFormSubmit" type="submit" value="Inregistrare"/>
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

export default Register;