import React from 'react';
import {setMiscAvatar, setUserData} from '../../../../redux/store/user/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import UploadImage from './postactions/uploadimage';
import UploadVideo from './postactions/uploadvideo';
import UploadMusic from './postactions/uploadmusic';
import UploadLink from './postactions/uploadlink';
import UploadSmile from './postactions/uploadsmile';
import $ from 'jquery';

import {addFeedPost, changeFeedPostType} from '../../../../redux/store/feed/actions';


function mappingData(state) {
    return {
        user: state.userReducer,
        postType: state.feedReducer.postType
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
        console.log(this.props.postType);
    }

    generateNewID() {
        return Math.random();
    }

    addPost() {

        let postType = $('.SelectedPostType').data('selectedType');

        const username = this.props.user.username;
        const by = this.props.user.username;
        const content = $('.FeedAddPostInput').val();
        const avatar = this.props.user.avatar;

        let post_id = this.generateNewID();

        let post = {};
        post[post_id] = {
            'by': by,
            'type': postType,
            'content': content,
            'avatar': avatar,
            'token': '',
            'first_name': 'Mihai',
            'last_name': 'Cuculescu',
        };


        this.props.addFeedPost(post);
    }

    render() {
        // If user is not on feed, or current profile is not his own
        this.currentProfile = this.context.currentProfile;
        if (this.props.user.username !== this.currentProfile && this.currentProfile !== undefined) {
            return null;
        }

        $('.AddPostAction').on('click', function (e) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                console.log('no class');
                $('.SelectedPostType').attr('data-selected-type', 'text');
            } else {
                console.log('add class');
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
                    <div data-selected-type="text" className="SelectedPostType">
                        {this.props.postType}
                    </div>
                </div>
                <div className="FeedPostActions UserAction">
                    <div className="LeftAligned">
                        <UploadImage/>
                        <UploadVideo/>
                        <UploadMusic/>
                        <UploadLink/>
                        <UploadSmile/>
                    </div>
                    <div className="RightAligned">
                        <span onClick={this.addPost} className="FeedAddPostButton"><i
                            className="fas fa-paper-plane"></i></span>
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
