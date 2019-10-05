import {actionTypes} from '../actions';

const initialState = {
    index: -1,
    targetIndex: -1,
    message: '',
    allUsers: []
};

export default function usersReducer(state = initialState, action) {
    const newUsers = state.allUsers.map(value => ({...value, subs: value.subs.slice()}));

    switch (action.type) {
        case actionTypes.ADD_USER:
            return {
                index: -1,
                targetIndex: -1,
                message: 'INFO: Account created',
                allUsers: []
            };

        case actionTypes.SIGN_IN_USER:
             return {
                 index: action.payload.index,
                 targetIndex: -1,
                 message: '',
                 allUsers: action.payload.allUsers
             };

        case actionTypes.SIGN_IN_ERROR:
             return {
                 index: -1,
                 targetIndex: -1,
                 message: action.payload.message,
                 allUsers: []
             };

        case actionTypes.USER_POSTS:
        case actionTypes.ALL_POSTS:
            return {
                index: state.index,
                targetIndex: action.payload,
                message: state.message,
                allUsers: newUsers
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
        targetIndex: state.targetIndex,
        message: state.message,
        allUsers: newUsers
    };
}
