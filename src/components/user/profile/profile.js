import React from 'react';
import '../../../css/profile.css';
import ProfileContent from './profilecontent/profilecontent';
import ProfileHeader from "./profilecontent/profileheader";
import PropTypes from 'prop-types';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.currentProfile = props.match.params.username;
    }

    getChildContext() {
        return {currentProfile: this.currentProfile};
    }

    render() {
        return (
            <div className="Container">
                <ProfileHeader currentProfile={this.currentProfile}/>
                <ProfileContent/>
            </div>
        )
    }

}

Profile.childContextTypes = {
    currentProfile: PropTypes.string
};

export default Profile;