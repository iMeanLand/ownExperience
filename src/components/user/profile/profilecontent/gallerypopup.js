import React from 'react';
import $ from 'jquery';

class galleryPopup extends React.Component {

    constructor(props) {
        super(props);

        this.selectAvatar = this.selectAvatar.bind(this);
        this.handleUploadButton = this.handleUploadButton.bind(this);
    }

    selectAvatar(e) {

        $('.galleryPopupImage').removeClass('selected');
        $(e.currentTarget).addClass('selected');
        let imageName = $(e.currentTarget).data('image');

        this.selectedAvatar = imageName;
    }

    handleUploadButton() {
        this.props.handleUploadAvatar(this.selectedAvatar);
        this.handleCloseGalleryPopup();
    }

    handleCloseGalleryPopup() {
        $('.galleryPopupImage').removeClass('selected');
        let gallery = document.getElementById('galleryPopup');
        gallery.style.top = '-200%';
        document.getElementsByClassName('floatingWrapper')[0].style.display = 'none';
    }

    render() {
        return (
            <div>
                <div className="galleryPopup" id="galleryPopup">
                    <div className="galleryPopupContent">
                        <div className="Row galleryPopupImages">
                            <div className="FiveColumn">
                                <div className="galleryPopupImage"
                                     style={{backgroundImage: 'url("/uploads/dreamers.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="cover.jpg"
                                     style={{backgroundImage: 'url("/uploads/cover.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="cover.jpg"
                                     style={{backgroundImage: 'url("/uploads/stefan.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="someone.jpg"
                                     style={{backgroundImage: 'url("/uploads/someone.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="space.jpg"
                                     style={{backgroundImage: 'url("/uploads/space.png")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="toyota.jpg"
                                     style={{backgroundImage: 'url("/uploads/toyota.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="trance.jpg"
                                     style={{backgroundImage: 'url("/uploads/trance.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="trash.jpg"
                                     style={{backgroundImage: 'url("/uploads/trash.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="police.jpg"
                                     style={{backgroundImage: 'url("/uploads/police.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="tarelka.jpg"
                                     style={{backgroundImage: 'url("/uploads/tarelka.png")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="thumb.jpg"
                                     style={{backgroundImage: 'url("/uploads/thumb.png")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar} data-image="someone.jpg"
                                     style={{backgroundImage: 'url("/uploads/someone.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar}
                                     data-image="developers.jpg" style={{backgroundImage: 'url("/uploads/developers.jpg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar}
                                     data-image="rock.jpeg" style={{backgroundImage: 'url("/uploads/rock.jpeg")'}}>
                                </div>
                            </div>
                            <div className="FiveColumn">
                                <div className="galleryPopupImage" onClick={this.selectAvatar}
                                     data-image="999.png" style={{backgroundImage: 'url("/uploads/999.png")'}}>
                                </div>
                            </div>
                        </div>
                        <div className="galleryPopupButtons">
                            <span onClick={this.handleCloseGalleryPopup} className="NonDefaultButton">
                                Cancel
                            </span>
                            <span id="uploadAvatar" onClick={this.handleUploadButton} className="DefaultButton">
                                Upload Avatar
                            </span>
                        </div>
                    </div>
                </div>
                <div className="floatingWrapper" onClick={this.handleCloseGalleryPopup}>
                </div>
            </div>
        )
    }
}

export default galleryPopup;