const initialState = {
    postType: '',
    actionValue: '',
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
                postType: action.payload.postType,
                active: action.payload.active,
                type: action.payload.type,
                actionValue: action.payload.actionValue
            };
        default:
            return state;
    }
};

export default feedReducer;