import {combineReducers} from 'redux';
import posts from './posts';
import {usersReducer} from './users';

export default combineReducers({
    posts,
    users: usersReducer
})
