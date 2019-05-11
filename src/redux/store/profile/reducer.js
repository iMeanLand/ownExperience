const initialState = {
    avatar: '',
    username: '',
    first_name: '',
    last_name: '',
    token: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PROFILE_USER_DATA':
            return {...action.payload};
        case 'SET_PROFILE_AVATAR':
            return {...state, avatar: action.payload};
    }
    return state;
};

export default profileReducer;