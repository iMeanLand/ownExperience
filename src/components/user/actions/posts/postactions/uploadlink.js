import React from 'react';

class uploadLink extends React.Component {

    render() {
        return (
            <span data-type="link" className="FeedUploadLink AddPostAction">
                 <span className="buttonTip">Link</span>
                <i className="fas fa-link"></i>
            </span>
        );
    }

}

export default uploadLink;