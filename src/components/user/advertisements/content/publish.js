import React from 'react';
import Sidebar from '../../sidebar/advertisements/sidebar';
import {changeUserSettings, setUserData} from "../../../../redux/store/user/actions";
import {connect} from "react-redux";
import '../../../../css/advertisement.css';
import $ from "jquery";
import AlertSuccess from "../../../modules/alerts/alertsuccess";
import AlertFailed from "../../../modules/alerts/alertfailed";

function mappingData(state) {
    return {
        user: state.userReducer
    };
}

const mapDispatchToComponent = {
    changeUserSettings,
    setUserData
};


class Publish extends React.Component{

    publish(e) {
        e.preventDefault();

        let advertisementData = {
            first_name: $('#publishAnAdvertisement #first_name').val(),
            last_name: $('#publishAnAdvertisement #last_name').val(),
            email: $('#publishAnAdvertisement #email').val(),
            address: $('#publishAnAdvertisement #address').val(),
            company: $('#publishAnAdvertisement #company_name').val(),
            contact_option: $('#publishAnAdvertisement #contact_option').val(),
        };

        $('#publishAnAdvertisement #address').val('');
        $('#publishAnAdvertisement #company_name').val('');
        $('#publishAnAdvertisement #contact_option').val('');
        $('#publishAnAdvertisement #image').val('');

        AlertSuccess.displayAlert('Advertisement', 'Congratulations! Your advertisement is in pending status');
    }

    render() {
        return (
            <div className="Container">
                <div className="PageContainer">
                    <div className="PageContainerContent">
                        <div className="PageHeader">
                            Publish the advertisement
                        </div>
                        <div className="PageContent">
                            <form id="publishAnAdvertisement" onSubmit={this.publish}>
                                <label>
                                    <h3>Your personal info</h3>
                                </label>
                                <div className="Row">
                                    <div className="TwoColumn">
                                        <label>
                                                <span className="formLabel">First Name
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
                                            <input type="text" id="first_name" defaultValue={this.props.user.first_name}
                                                   className="formInput" placeholder="example: Alin" disabled/>
                                        </label>
                                    </div>
                                    <div className="TwoColumn">
                                        <label>
                                                <span className="formLabel">Last Name
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
                                            <input type="text" id="last_name" defaultValue={this.props.user.last_name}
                                                   className="formInput" placeholder="example: Tabuci" disabled/>
                                        </label>
                                    </div>
                                    <div className="OneColumn">
                                        <label>
                                                <span className="formLabel">Email
                                                <span><i className="fas fa-info-circle"></i></span>
                                                </span>
                                            <input type="text" id="email" defaultValue={this.props.user.email}
                                                   className="formInput"
                                                   placeholder="example: alin.tabuci@wippo.it" required/>
                                        </label>
                                    </div>
                                    <div className="OneColumn">
                                        <label>
                                            <span className="formLabel">Address</span>
                                            <input type="text" id="address" className="formInput" required/>
                                        </label>
                                    </div>
                                    <div className="OneColumn">
                                        <label>
                                            <span className="formLabel">Company name</span>
                                            <input type="text" id="company_name" className="formInput" required/>
                                        </label>
                                    </div>
                                    <div className="OneColumn">
                                        <label>
                                            <span className="formLabel">Choose the option to be contacted if necessary <span><i className="fas fa-info-circle"></i></span></span>
                                            <select id="contact_option" className="formInput">
                                                <option value="email_option">Email</option>
                                                <option value="phone_option">Phone</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label>
                                        <h3>Advertisement information</h3>
                                    </label>
                                    <div className="OneColumn">
                                        <label>
                                            <span className="formLabel">Choose the image size</span>
                                            <select id="city" className="formInput">
                                                <option value="266">266 x 266</option>
                                                <option value="266">266 x 350</option>
                                                <option value="266">266 x 480</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="OneColumn">
                                        <label>
                                            <span className="formLabel">Choose the image <span><i className="fas fa-info-circle"></i></span></span>
                                            <input type="file" id="image" className="formInput" required/>
                                        </label>
                                    </div>
                                    <div className="TwoColumn">
                                        <label>
                                            <span className="formLabel">Choose the country for advertisement</span>
                                            <select id="country" className="formInput">
                                                <option value="">All</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="TwoColumn">
                                        <label>
                                            <span className="formLabel">Choose the city for advertisement</span>
                                            <select id="city" className="formInput">
                                                <option value="">All</option>
                                            </select>
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
                <Sidebar/>
            </div>
        );
    }
}

export default connect(mappingData, mapDispatchToComponent)(Publish);
