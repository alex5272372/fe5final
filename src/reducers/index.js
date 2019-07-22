import { combineReducers } from 'redux';
import page from './page';
import post from './post';
import user from './user';

export default combineReducers({
    page,
    post,
    user
})
