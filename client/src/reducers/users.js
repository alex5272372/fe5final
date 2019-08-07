import {actionTypes} from '../actions';

function createUser() {
    return {
        _id: '',
        login: '',
        password: '',
        icon: '',
        subs: []
    }
}

export const initialState = {
    index: 0,
    allUsers: [createUser()],
    isFetching: false
};

export function usersReducer(state = initialState, action) {
    const newUsers = state.allUsers.map(value => ({...value, subs: value.subs.slice()}));

    switch (action.type) {
        case actionTypes.GET_USERS_SUCCESS:
            /*return { // for users.test.js
             ...initialState,
             isFetching: true
            };*/

             return {
                 ...action.payload,
                 isFetching: true
             };

        case actionTypes.ADD_USER:
            newUsers.push(createUser());
            break;

        case actionTypes.MODIFY_USER:
            newUsers[state.index] = {...newUsers[state.index], ...action.payload};
            break;

        default:
            return state;
    }

    return {
        index: newUsers.length - 1,
        allUsers: newUsers,
        isFetching: state.isFetching
    };
}
