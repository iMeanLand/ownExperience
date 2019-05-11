import React from 'react';
import {NavLink} from "react-router-dom";
import {setMiscAvatar} from '../../../redux/store/user/actions';
import {setProfileUserData, setProfileAvatar} from '../../../redux/store/profile/actions';
import {connect} from 'react-redux';

function mappingData(state) {
    return {
        user: state.userReducer,
        profile: state.profileReducer
    };

}
const mapDispatchToComponent = {
    setMiscAvatar,
    setProfileUserData,
    setProfileAvatar
};

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props);

        this.handleUploadAvatar = this.handleUploadAvatar.bind(this);
    }

    componentDidMount() {
        // Get current profile name
        // Temp version until will figure out how to get route URL param
        this.profile = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1, window.location.pathname.length);
        this.props.setProfileUserData(this.profile);
    }

    handleUploadAvatar() {
        this.props.setProfileAvatar();
        this.props.setMiscAvatar();
    }

    render() {
        let uploadAvatar = null;

        if (this.props.profile.token === global.token) {
            uploadAvatar = (
                <div className="ProfileUploadAvatar" onClick={this.handleUploadAvatar}>
                    <i className="fas fa-upload"></i>
                </div>
            );
        }

        let name = this.profile;
        if (this.props.profile.first_name !== null && this.props.profile.last_name !== null) {
            name = this.props.profile.first_name + ' ' + this.props.profile.last_name;
        }

        return (
            <div className="ProfileCover"
                 style={{backgroundImage: 'url(/uploads/cover.jpg)'}}>
                <div className="ProfileAvatar"
                     style={{backgroundImage: 'url(/uploads/' + this.props.profile.avatar + ')'}}>
                    {uploadAvatar}
                </div>
                <div className="ProfileName">
                    {name}
                </div>
                <div className="ProfileMenu">
                    <ul>
                        <li>
                            <NavLink exact to={'/profile/' + this.profile}>
                                Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.profile + '/about'}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.profile + '/gallery'}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.profile + '/friends'}>
                                Friends
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.profile + '/groups'}>
                                Groups
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default connect(mappingData, mapDispatchToComponent)(ProfileHeader);
