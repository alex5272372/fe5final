import {actionTypes} from '../actions';

const initialState = {
    index: -1,
    allUsers: [
        {
            login: 'Alex',
            password: '123',
            icon: './myIcon.png',
            subs: []
        }
    ]
};

function usersReducer(state = initialState, action) {
    const newUsers = state.allUsers.map(value => ({...value, subs: value.subs.slice()}));

    switch (action.type) {
        case actionTypes.ADD_USER:
            newUsers.push({...action.payload, subs: []});

            return {
                index: newUsers.length - 1,
                allUsers: newUsers
            };

        case actionTypes.MODIFY_USER:
            newUsers[state.index] = {...newUsers[state.index], ...action.payload};

            return {
                index: state.index,
                allUsers: newUsers
            };

        default:
            return state;
    }
}

export default usersReducer;