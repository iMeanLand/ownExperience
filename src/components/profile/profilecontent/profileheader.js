import React from 'react';
import {Link, NavLink} from "react-router-dom";
import userData from "../../userdata";
import {changeAvatar, getUserData} from '../../../redux/store/user/actions';
import {connect} from 'react-redux';

function mappingData(state) {
    return {
        avatar: state.userReducer.avatar,
    };
}

const mapDispatchToComponent = {
    changeAvatar,
    getUserData
};

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props);

        this.handleUploadAvatar = this.handleUploadAvatar.bind(this);
    }

    handleUploadAvatar(e) {
        this.props.changeAvatar();
    }

    render() {

        return (
            <div className="ProfileCover"
                 style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/uploads/cover.jpg)'}}>
                <div className="ProfileAvatar"
                     style={{backgroundImage: 'url(' + this.props.avatar + ')'}}>
                    <div className="ProfileUploadAvatar" onClick={this.handleUploadAvatar}>
                        <i className="fas fa-upload"></i>
                    </div>
                </div>
                <div className="ProfileName">{userData.username}</div>
                <div className="ProfileMenu">
                    <ul>
                        <li>
                            <NavLink exact to="/profile">
                                Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/profile/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/profile/gallery">
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/profile/friends">
                                Friends
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/profile/groups">
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
