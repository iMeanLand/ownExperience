import React from 'react';
import {connect} from 'react-redux';
import {changeFeedPostType} from '../../../../../redux/store/feed/actions';
import ImageUploader from 'react-images-upload';

function mappingData(state) {
    return {
      
    };
}

const mapDispatchToComponent = {
    changeFeedPostType,
};

class uploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.uploadImage = this.uploadImage.bind(this);
        this.handleImageIconClick = this.handleImageIconClick.bind(this);
        this.state = { pictures: [] };
    }

    uploadImage(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        // Uploading IMAGE

    }

    uploadImageTemplate() {
        return (
            <div className="fileLabel">
                <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.uploadImage}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>
        )
    }

    handleImageIconClick() {

        let postType = {
            postType: this.uploadImageTemplate(),
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
            postType.type = 'image';
            postType.postType = this.uploadImageTemplate();
            this.props.changeFeedPostType(postType);
        }

    }

    render() {
        return (
            <span data-type="image" className="FeedUploadImage AddPostAction" onClick={this.handleImageIconClick}>
                <i className="fas fa-camera"></i>
            </span>
        );
    }

}

export default connect(mappingData, mapDispatchToComponent)(uploadImage);