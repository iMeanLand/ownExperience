import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import profileReducer from './profile/reducer';
import adminReducer from './admin/reducer';
import feedReducer from './feed/reducer';

export const globalReducer = combineReducers({userReducer, profileReducer, adminReducer, feedReducer});
