import {ADD_USER, MODIFY_USER} from '../actions';

const initialState = {
    login: '',
    password: '',
    icon: '',
    subs: ''
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return state;
        case MODIFY_USER:
            return state;
        default:
            return state;
    }
}

export default usersReducer;