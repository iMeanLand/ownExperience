import React from 'react';

class UserData {

    constructor() {

        this.state = {
            avatar: process.env.PUBLIC_URL + '/uploads/thumb.png',
            name: 'Alin Tabuci'
        }
    }

    getAvatar() {
        // Getting the current avatar;
        return this.state.avatar;
    }

    getName() {
        return this.state.name;
    }


    setNewImage() {
        // TODO: upload new image

        // TODO: change the state of the new image!

        this.setState({});
    }

}

export default UserData;