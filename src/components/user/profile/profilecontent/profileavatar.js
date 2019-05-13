import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class profileAvatar extends React.Component {
    render() {
        return(
            <Modal trigger={this.props.button}
                   basic
                   size='small'
            >
                <Modal.Content image>
                    <Image wrapped className="profileAvatarPopup" size='medium' src={this.props.userAvatar} />
                </Modal.Content>
            </Modal>
        )
    }
}

export default profileAvatar;