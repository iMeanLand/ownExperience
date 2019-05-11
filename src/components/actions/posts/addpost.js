import React from 'react';
import {changeAvatar, getUserData} from '../../../redux/store/user/actions';
import {connect} from 'react-redux';

function mappingData(state) {
    return {
        user: state.userReducer
    };
}

const mapDispatchToComponent = {
    changeAvatar,
    getUserData
};


function addpost(props) {
    return (
        <div className="FeedAddPost">
            <div className="FeedAddPostHeader">
                <div className="byUser">
                    <div className="byUserAvatar" style={{backgroundImage: 'url("' + props.user.avatar + '")'}}>
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

export default connect(mappingData, mapDispatchToComponent)(addpost);
