import {actionTypes} from '../actions';

const initialState = {
    index: 0,
    postIndex: 0,
    error: '',
    allUsers: []
};

export default function usersReducer(state = initialState, action) {
    const newUsers = state.allUsers.map(value => ({...value, subs: value.subs.slice()}));

    switch (action.type) {
        case actionTypes.ADD_USER:
            return {
                index: 0,
                postIndex: 0,
                error: 'INFO: Account created',
                allUsers: []
            };

        case actionTypes.SIGN_IN_USER:
             return {
                 index: action.payload.index,
                 postIndex: action.payload.index,
                 error: '',
                 allUsers: action.payload.allUsers
             };

        case actionTypes.SIGN_IN_ERROR:
             return {
                 index: 0,
                 postIndex: 0,
                 error: action.payload.error,
                 allUsers: []
             };

        case actionTypes.SUBSCRIBE:
        case actionTypes.UNSUBSCRIBE:
            newUsers[state.index].subs = action.payload;
            break;

        default:
            return state;
    }

    return {
        index: state.index,
        postIndex: state.postIndex,
        error: state.error,
        allUsers: newUsers
    };
}
