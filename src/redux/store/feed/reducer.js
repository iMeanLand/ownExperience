const initialState = {
    // username: {
    //     avatar: '',
    //     first_name: '',
    //     type: '',
    //     last_name: '',
    //     token: '',
    //     by: '',
    //     content: ''
    // }
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FEED_DATA':
            return {...action.payload};
        case 'ADD_NEW_POST':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default feedReducer;