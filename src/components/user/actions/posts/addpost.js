import React from 'react';
import {setMiscAvatar, setUserData} from '../../../../redux/store/user/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import UploadImage from './postactions/uploadimage';
import UploadVideo from './postactions/uploadvideo';
import UploadMusic from './postactions/uploadmusic';
import UploadLink from './postactions/uploadlink';
import UploadSmile from './postactions/uploadsmile';
import AlertSuccess from '../../../modules/alerts/alertsuccess';
import AlertFailed from '../../../modules/alerts/alertfailed';
import $ from 'jquery';

import {addFeedPost, changeFeedPostType} from '../../../../redux/store/feed/actions';


function mappingData(state) {
    return {
        user: state.userReducer,
        postType: state.feedReducer,
    };
}

const mapDispatchToComponent = {
    setMiscAvatar,
    setUserData,
    addFeedPost,
    changeFeedPostType
};

class AddPost extends React.Component {

    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this);
    }

    generateNewID() {
        return Math.random();
    }

    addPost() {

        const username = this.props.user.username;
        const by = this.props.user.username;
        const content = $('.FeedAddPostInput').val();
        const additionalContent = this.props.postType.actionValue;
        const avatar = this.props.user.avatar;
        const type = this.props.postType.type;

        let post_id = this.generateNewID();

        let post = {};
        post[post_id] = {
            'by': by,
            'type': type,
            'content': content,
            'username': username,
            'additional_content': additionalContent,
            'avatar': avatar,
            'token': '',
            'first_name': 'Alin',
            'last_name': 'Tabuci',
        };

        console.log(post);

        if (content || additionalContent) {
            AlertSuccess.displayAlert('Post', 'Post has been posted successfully');
            this.props.addFeedPost(post);
        } else {
            AlertFailed.displayAlert('Post', 'Failed to post, because textarea is empty');
        }

    }

    render() {
        // If user is not on feed, or current profile is not his own
        this.currentProfile = this.context.currentProfile;
        if (this.props.user.username !== this.currentProfile && this.currentProfile !== undefined) {
            return null;
        }

        let active = '';

        if (this.props.postType.active) {
            active = 'active ' + this.props.postType.type;
        }

        $('.AddPostAction').on('click', function (e) {
            if ($('.SelectedPostType').hasClass('active')) {
                $(this).removeClass('active');
                $('.SelectedPostType').attr('data-selected-type', 'text');
            } else {
                $('.AddPostAction').removeClass('active');
                $(this).addClass('active');
                $('.SelectedPostType').attr('data-selected-type', $(e.currentTarget).data('type'));
            }
        });

        return (
            <div className="FeedAddPost">
                <div className="FeedAddPostHeader">
                    <div className="byUser">
                        <div className="byUserAvatar"
                             style={{backgroundImage: 'url("' + this.props.user.avatar + '")'}}>
                        </div>
                        Add post title
                    </div>
                </div>
                <div className="FeedAddPostContent">
                    <textarea className="FeedAddPostInput" placeholder="Post something in your time line">
                    </textarea>
                    <div data-selected-type="text" id="SelectedPostType" className={"SelectedPostType " + active}>
                        {this.props.postType.postType}
                    </div>
                </div>
                <div className="FeedPostActions UserAction">
                    <div className="LeftAligned">
                        <UploadImage uploadImage={this.props.postType.actionValue} valueOfAction={this.props.postType.actionValue}/>
                        <UploadVideo valueOfAction={this.props.postType.actionValue}/>
                        <UploadMusic valueOfAction={this.props.postType.actionValue}/>
                        <UploadLink valueOfAction={this.props.postType.actionValue}/>
                        <UploadSmile valueOfAction={this.props.postType.actionValue}/>
                    </div>
                    <div className="RightAligned">
                        <span onClick={this.addPost} className="FeedAddPostButton">
                            <i className="fas fa-paper-plane">
                            </i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

AddPost.contextTypes = {
    currentProfile: PropTypes.string
};

export default connect(mappingData, mapDispatchToComponent)(AddPost);
