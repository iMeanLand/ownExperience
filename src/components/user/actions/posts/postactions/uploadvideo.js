import React from 'react';
import {connect} from 'react-redux';
import {changeFeedPostType} from '../../../../../redux/store/feed/actions';

function mappingData(state) {
    return {
      
    };
}

const mapDispatchToComponent = {
    changeFeedPostType,
};

class uploadVideo extends React.Component {

    constructor(props) {
        super(props);
        this.uploadVideo = this.uploadVideo.bind(this);
        this.setValueOfAction = this.setValueOfAction.bind(this);
    }

    setValueOfAction(e) {
        let postType = {
            postType: this.uploadVideoTemplate(),
            active: false,
            actionValue: e.currentTarget.value
        };

        postType.active = true;
        postType.type = 'video';
        this.props.changeFeedPostType(postType);
    }

    uploadVideoTemplate() {
        return (
            <div className="fileLabel">
                <input type="text" id="uploadFileInput" onChange={this.setValueOfAction} defaultValue={this.props.valueOfAction} style={{padding: 9}} className="formInput" placeholder="Youtube Link example: https://www.youtube.com/w3A1vcax" />
            </div>
        );
    }

    uploadVideo() {

        let postType = {
            postType: this.uploadVideoTemplate(),
            active: false
        };
        
        let el = document.getElementsByClassName('SelectedPostType')[0];
        if (el.classList.contains('active')) {
            postType.active = false;
            postType.type = '';
            postType.postType = null;
            this.props.changeFeedPostType(postType);
        } else {
            postType.active = true;
            postType.type = 'video';
            postType.postType = this.uploadVideoTemplate();
            this.props.changeFeedPostType(postType);
        }

    }

    render() {
        return (
            <span data-type="video" className="FeedUploadVideo AddPostAction" onClick={this.uploadVideo}>
                <i className="fas fa-video"></i>
            </span>
        );
    }

}

export default connect(mappingData, mapDispatchToComponent)(uploadVideo);