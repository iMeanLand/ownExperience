import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import profileReducer from './profile/reducer';

export const globalReducer = combineReducers({userReducer, profileReducer});
