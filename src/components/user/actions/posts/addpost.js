import React from 'react';
import {setMiscAvatar, setUserData} from '../../../../redux/store/user/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function mappingData(state) {
    return {
        user: state.userReducer
    };
}

const mapDispatchToComponent = {
    setMiscAvatar,
    setUserData
};

class AddPost extends React.Component {

    render() {
        // If user is not on feed, or current profile is not his own
        this.currentProfile = this.context.currentProfile;
        if (this.props.user.username !== this.currentProfile && this.currentProfile !== undefined) {
            return null;
        }

        return (
            <div className="FeedAddPost">
                <div className="FeedAddPostHeader">
                    <div className="byUser">
                        <div className="byUserAvatar" style={{backgroundImage: 'url("' + this.props.user.avatar + '")'}}>
                        </div>
                        Add post title
                    </div>
                </div>
                <div className="FeedAddPostContent">
                <textarea className="FeedAddPostInput" placeholder="Post something in your time line">
                </textarea>
                </div>
                <div className="FeedPostActions UserAction">
                    <span className="FeedAddPostButton"><i className="fas fa-paper-plane"></i></span>
                </div>
            </div>
        )
    }

}

AddPost.contextTypes = {
    currentProfile: PropTypes.string
};

export default connect(mappingData, mapDispatchToComponent)(AddPost);