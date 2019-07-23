import { combineReducers } from 'redux';
import signIn from './signIn';
import page from './page';
import post from './post';
import user from './user';

export default combineReducers({
    signIn,
    page,
    post,
    user
})
