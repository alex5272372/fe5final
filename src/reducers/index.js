import { combineReducers } from 'redux';
import auth from './auth';
import page from './page';
import post from './post';
import user from './user';

export default combineReducers({
    auth,
    page,
    post,
    user
})
