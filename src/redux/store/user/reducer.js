const initialState = {
    'token': ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_AVATAR':
            return {...state,
                'avatar': action.payload
            };
        case 'CHANGE_USER_SETTINGS':
            return {...state,
                'user': action.payload
            };
        case 'GET_USER_DATA':
            return {...state,
                'user': action.payload
            };
    }
    return state;
};

export default userReducer;