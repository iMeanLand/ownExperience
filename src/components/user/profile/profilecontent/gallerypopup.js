import React from 'react';
import $ from 'jquery';
import {Button, Modal} from 'semantic-ui-react'

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
        this.props.close();
    }

    render() {
        return (
            <div>
                <Modal dimmer={true} open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <div className="Row galleryPopupImages">
                            <div className="FiveColumn">
                                <div className="galleryPopupImage"
                                     style={{backgroundImage: 'url("/uploads/dreamers.jpg")'}}>
                                </div>
                            </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="cover.jpg"
                                         style={{backgroundImage: 'url("/uploads/cover.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="cover.jpg"
                                         style={{backgroundImage: 'url("/uploads/stefan.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="someone.jpg"
                                         style={{backgroundImage: 'url("/uploads/someone.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="space.jpg"
                                         style={{backgroundImage: 'url("/uploads/space.png")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="toyota.jpg"
                                         style={{backgroundImage: 'url("/uploads/toyota.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="trance.jpg"
                                         style={{backgroundImage: 'url("/uploads/trance.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="trash.jpg"
                                         style={{backgroundImage: 'url("/uploads/trash.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="police.jpg"
                                         style={{backgroundImage: 'url("/uploads/police.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="tarelka.jpg"
                                         style={{backgroundImage: 'url("/uploads/tarelka.png")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="thumb.jpg"
                                         style={{backgroundImage: 'url("/uploads/thumb.png")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="someone.jpg"
                                         style={{backgroundImage: 'url("/uploads/someone.jpg")'}}>
                                    </div>
                                </div>
                                <div className="FiveColumn">
                                    <div className="galleryPopupImage" onClick={this.selectAvatar}
                                         data-image="developers.jpg"
                                         style={{backgroundImage: 'url("/uploads/developers.jpg")'}}>
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

                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.props.close}>
                            Nope
                        </Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Upload avatar"
                            onClick={this.handleUploadButton}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default galleryPopup;