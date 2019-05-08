import {changeAvatar} from './actions';

const initialState = {
    'username': '',
    'password': '',
    'user': {}
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case changeAvatar.type:
            return {...state,
                'avatar': changeAvatar.payload
            };

        case 'GET_USER_DATA':
            return {...state,
                'user': action.data
            };
    }
    return state;
};

export default userReducer;
