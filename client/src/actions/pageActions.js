import {APP_HOST_NAME} from '../settings';

export const pageTypes = {
    GET_USERS: 'GET_USERS',
    NEW_LIKE: 'NEW_LIKE'
};

export function getUsers() {
    return (dispatch) => {
        fetch(`https://cors-anywhere.herokuapp.com/${APP_HOST_NAME}/api/users/`)
            .then(response => response.json())
            .then(users => dispatch({
                type: pageTypes.GET_USERS,
                payload: users
            }))
    }
}

export function newLike() {
    return {
        type: pageTypes.NEW_LIKE
    }
}
