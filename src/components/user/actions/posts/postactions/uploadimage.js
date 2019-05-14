import React from 'react';
import {connect} from 'react-redux';
import {changeFeedPostType} from '../../../../../redux/store/feed/actions';

function mappingData(state) {
    return {
      
    };
}

const mapDispatchToComponent = {
    changeFeedPostType
};

class uploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.uploadImage = this.uploadImage.bind(this);
    }

    uploadImageTemplate() {
        return (
            <div className="fileLabel">
                <input type="file" id="uploadFileInput" />
            </div>
        )
    }

    uploadImage(e) {
        
        let el = document.getElementsByClassName('SelectedPostType')[0];
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            this.props.changeFeedPostType(null);
        } else {
            el.classList.add('active');
            this.props.changeFeedPostType(this.uploadImageTemplate());
        }

    }

    render() {
        return (
            <span data-type="image" className="FeedUploadImage AddPostAction" onClick={this.uploadImage}>
                <i className="fas fa-camera"></i>
            </span>
        );
    }

}

export default connect(mappingData, mapDispatchToComponent)(uploadImage);