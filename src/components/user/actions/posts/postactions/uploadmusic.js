import React from 'react';

class uploadMusic extends React.Component {

    render() {
        return (
            <span data-type="music" className="FeedUploadMusic AddPostAction">
                 <span className="buttonTip">Music</span>
                <i className="fas fa-music"></i>
            </span>
        );
    }

}

export default uploadMusic;