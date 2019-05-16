const initialState = {
    type: 'text',
    active: false,
    actionValue: '',
    additional_content: '',
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
                content: action.payload.content,
                actionValue: action.payload.actionValue
            };
        default:
            return state;
    }
};

export default feedReducer;