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
    postIndex: 0,
    allUsers: []
};

export function usersReducer(state = initialState, action) {
    const newUsers = state.allUsers.map(value => ({...value, subs: value.subs.slice()}));

    switch (action.type) {
        case actionTypes.GET_USERS:
            /*return { // for users.test.js
             ...initialState
            };*/

             return {
                 index: action.payload.length - 1,
                 postIndex: action.payload.length - 1,
                 allUsers: action.payload
             };

        case actionTypes.SIGN_IN_USER:
             return {
                 index: action.payload.index,
                 postIndex: action.payload.index,
                 allUsers: action.payload.allUsers
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
        postIndex: newUsers.length - 1,
        allUsers: newUsers
    };
}
