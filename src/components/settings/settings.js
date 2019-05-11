import React from 'react';
import Sidebar from '../sidebar/settings/sidebar';
import $ from 'jquery';
import {changeUserSettings, getUserData} from "../../redux/store/user/actions";
import {connect} from "react-redux";

function mappingData(state) {
    return {
        user: state.userReducer
    };
}

const mapDispatchToComponent = {
    changeUserSettings,
    getUserData
};


class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.changeSettings = this.changeSettings.bind(this);
    }

    changeSettings(e) {
        e.preventDefault();

        let userData = {
            first_name: $('#ChangeSettingsForm #first_name').val(),
            last_name: $('#ChangeSettingsForm #last_name').val(),
            email: $('#ChangeSettingsForm #email').val()
        };

        this.props.changeUserSettings(userData);
    }

    render() {
        return (
            <div className="Container">
                <div className="PageContainer">
                    <div className="PageContainerContent">
                        <div className="PageHeader">
                            Main settings
                        </div>
                        <div className="PageContent">
                            <div className="Row">
                                <form id="ChangeSettingsForm" onSubmit={this.changeSettings}>
                                    <div className="Row">
                                        <div className="OneColumn">
                                            <label>
                                                <span className="formLabel">Username</span>
                                                <input type="text" defaultValue={this.props.user.username}
                                                       className="formInput disabled" disabled/>
                                            </label>
                                        </div>
                                        <div className="TwoColumn">
                                            <label>
                                                <span className="formLabel">First Name</span>
                                                <input type="text" defaultValue={this.props.user.first_name} id="first_name"
                                                       className="formInput" placeholder="example: Alin"/>
                                            </label>
                                        </div>
                                        <div className="TwoColumn">
                                            <label>
                                                <span className="formLabel">Last Name</span>
                                                <input type="text" defaultValue={this.props.user.last_name} id="last_name"
                                                       className="formInput" placeholder="example: Tabuci"/>
                                            </label>
                                        </div>
                                        <div className="OneColumn">
                                            <label>
                                                <span className="formLabel">Email</span>
                                                <input type="text" id="email" defaultValue={this.props.user.email}
                                                       className="formInput"
                                                       placeholder="example: alin.tabuci@wippo.it"/>
                                            </label>
                                        </div>
                                        <div className="OneColumn">
                                            <label>
                                                <span className="formLabel">Current Password</span>
                                                <input type="text" id="current_password" className="formInput"/>
                                            </label>
                                        </div>
                                        <div className="OneColumn">
                                            <label>
                                                <span className="formLabel">New Password</span>
                                                <input type="text" id="new_password" className="formInput"/>
                                            </label>
                                        </div>
                                        <div className="OneColumn">
                                            <label>
                                                <span className="formLabel">Confirm New Password</span>
                                                <input type="text" id="confirm_new_password" className="formInput"/>
                                            </label>
                                        </div>
                                        <label className="formLabel">
                                            <button className="formSubmit">
                                                Save
                                            </button>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar/>
            </div>

        );
    }

}

export default connect(mappingData, mapDispatchToComponent)(Settings);
