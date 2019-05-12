const initialState = {
    username: '',
    current_password: '',
    new_password: '',
    token_a: ''
};

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_ADMIN_SETTINGS':
            return {...state,
                password: action.payload.password
            };
        case 'SET_ADMIN_DATA':
            return {...action.payload};
        default:
            return state;
    }
};

export default adminReducer;