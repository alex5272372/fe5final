export const pageTypes = {
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE: 'GET_USERS_FAILURE',
    NEW_LIKE: 'NEW_LIKE'
};

export function getUsers() {
    return (dispatch) => {
        dispatch({
            type: pageTypes.GET_USERS_REQUEST,
            payload: 'Loading users...'
        });

        fetch('https://swapi.co/api/people/1/')
            .then(response => response.json())
                    .then(users => dispatch({
                    type: pageTypes.GET_USERS_SUCCESS,
                    payload: users
                }))
            .catch(error => dispatch({
                    type: pageTypes.GET_USERS_FAILURE,
                    payload: error,
                    error: true
                })
            )
    }
}

export function newLike() {
    return {
        type: pageTypes.NEW_LIKE
    }
}
