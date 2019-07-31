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

const initialState = {
    index: 0,
    allUsers: [createUser()],
    isFetching: false
};

function usersReducer(state = initialState, action) {
    const newUsers = state.allUsers.map(value => ({...value, subs: value.subs.slice()}));

    switch (action.type) {
         case actionTypes.GET_USERS_SUCCESS:
            break;

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

export default usersReducer;
