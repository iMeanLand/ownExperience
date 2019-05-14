const initialState = {
    postType: '',
    feedPosts: {}
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FEED_DATA':
            return {
                ...state,
                feedPosts: action.payload
            };
        case 'ADD_NEW_POST':
            return {
                ...state,
                feedPosts: {...state.feedPosts , ...action.payload}
            };
        case 'CHANGE_POST_TYPE':
            return {
                ...state,
                postType: action.payload
            }
        default:
            return state;
    }
};

export default feedReducer;