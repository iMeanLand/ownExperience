const initialState = {
    avatar: '',
    username: '',
    first_name: '',
    last_name: '',
    email: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MISC_AVATAR':
            return {...state,
                avatar: action.payload
            };
        case 'CHANGE_USER_SETTINGS':
            return {...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email
            };
        case 'GET_USER_DATA':
            return {...action.payload};
    }
    return state;
};

export default userReducer;