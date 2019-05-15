import React from 'react';
import {NavLink} from "react-router-dom";
import {setMiscAvatar} from '../../../../redux/store/user/actions';
import {setProfileUserData, setProfileAvatar} from '../../../../redux/store/profile/actions';
import {connect} from 'react-redux';
import AlertSuccess from '../../../modules/alerts/alertsuccess';
import GalleryPopup from './gallerypopup';
import ProfileAvatar from './profileavatar';

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
        this.currentProfile = this.props.currentProfile;
        this.state = { open: false };
        this.show = dimmer => () => this.setState({ dimmer, open: true });
        this.close = () => this.setState({ open: false });
    }

    componentDidMount() {
        console.log(this.props);
        // Get current profile name
        this.props.setProfileUserData(this.currentProfile);
    }

    handleUploadAvatar(avatar) {
        this.props.setProfileAvatar(avatar);
        this.props.setMiscAvatar(avatar);

        AlertSuccess.displayAlert('Avatar', 'Avatar uploaded successfully');
    }



    render() {
        let uploadAvatar = null;

        if (this.props.profile.username === this.currentProfile) {
            uploadAvatar = (
                <div className="ProfileUploadAvatar" onClick={this.show(true)}>
                    <i className="fas fa-upload"></i>
                </div>
            );
        }
        // console.log(this.props);
        let name = this.profile;
        if (this.props.profile.first_name !== null && this.props.profile.last_name !== null) {
            name = this.props.profile.first_name + ' ' + this.props.profile.last_name;
        }

        const profileAvatar = (
            <div className="ProfileAvatar"
                 style={{backgroundImage: 'url('+ this.props.profile.avatar + ')'}}>
                {uploadAvatar}
            </div>
        );

        return (
            <div className="ProfileCover"
                 style={{backgroundImage: 'url(/uploads/cover.jpg)'}}>
                    {profileAvatar}
                <div className="ProfileName">
                    {name}
                </div>
                <div className="ProfileMenu">
                    <ul>
                        <li>
                            <NavLink exact to={'/profile/' + this.currentProfile}>
                                Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.currentProfile + '/about'}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.currentProfile + '/gallery'}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.currentProfile + '/friends'}>
                                Friends
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/profile/' + this.currentProfile + '/groups'}>
                                Groups
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <GalleryPopup open={this.state.open} close={this.close} handleUploadAvatar={this.handleUploadAvatar} />
                <ProfileAvatar userAvatar={this.props.profile.avatar} button={profileAvatar}/>
            </div>
        )
    }

}

export default connect(mappingData, mapDispatchToComponent)(ProfileHeader);
