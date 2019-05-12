import React from 'react';
import $ from 'jquery';
import {changeUserSettings, setUserData} from "../../../redux/store/user/actions";
import {connect} from "react-redux";
import AlertSuccess from '../../modules/alerts/alertsuccess';
import AlertFailed from '../../modules/alerts/alertfailed';


function mappingData(state) {
    return {
        user: state.userReducer
    };
}

const mapDispatchToComponent = {
    changeUserSettings,
    setUserData
};


class SettingsContent extends React.Component {

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

        if (this.props.changeUserSettings(userData)) {
            AlertSuccess.displayAlert('Settings', 'Your changes have been saved');
        } else {
            AlertFailed.displayAlert('Settings', 'Failed to save your settings, try again later');
        }

    }

    render() {
        return (
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
                                                <span className="formLabel">Username
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
                                                <input type="text" defaultValue={this.props.user.username}
                                                       className="formInput disabled" disabled/>
                                            </label>
                                        </div>
                                        <div className="TwoColumn">
                                            <label>
                                                <span className="formLabel">First Name
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
                                                <input type="text" defaultValue={this.props.user.first_name} id="first_name"
                                                       className="formInput" placeholder="example: Alin"/>
                                            </label>
                                        </div>
                                        <div className="TwoColumn">
                                            <label>
                                                <span className="formLabel">Last Name
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
                                                <input type="text" defaultValue={this.props.user.last_name} id="last_name"
                                                       className="formInput" placeholder="example: Tabuci"/>
                                            </label>
                                        </div>
                                        <div className="OneColumn">
                                            <label>
                                                <span className="formLabel">Email
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
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

        );
    }

}

export default connect(mappingData, mapDispatchToComponent)(SettingsContent);
