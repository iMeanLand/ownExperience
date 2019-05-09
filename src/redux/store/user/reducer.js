const initialState = {
    'username': '',
    'password': '',
    'avatar': process.env.PUBLIC_URL + '/uploads/thumb.png'
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_AVATAR":
            return {...state,
                'avatar': action.payload
            };

        case 'GET_USER_DATA':
            return {...state,
                'user': action.payload
            };
    }
    return state;
};

export default userReducer;
