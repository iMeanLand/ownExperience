import React from 'react';

class uploadImage extends React.Component {

    uploadImage() {



    }

    render() {
        return (
            <span data-type="image" className="FeedUploadImage AddPostAction" onClick={this.uploadImage}>
                <i className="fas fa-camera"></i>
            </span>
        );
    }

}

export default uploadImage;