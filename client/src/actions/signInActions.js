import {APP_HOST_NAME} from '../settings';

export const signInTypes = {
    ADD_USER: 'ADD_USER',
    SIGN_IN_USER: 'SIGN_IN_USER',
    SIGN_IN_ERROR: 'SIGN_IN_ERROR'
};

export function signInUser(login, password) {
    return dispatch => fetch(`${APP_HOST_NAME}/api/users/`)
        .then(response => response.json())
        .then(allUsers => {
            const index = allUsers.findIndex(user => user.login === login && user.password === password);

            if (index === -1) {
                return dispatch({
                    type: signInTypes.SIGN_IN_ERROR,
                    payload: {message: 'ERROR: User or password do not match'}
                })
            } else {

                return fetch(`${APP_HOST_NAME}/api/posts/`)
                    .then(response => response.json())
                    .then(allPosts => {
                        return dispatch({
                            type: signInTypes.SIGN_IN_USER,
                            payload: {index, allUsers, allPosts}
                        })
                    })
            }
        })
}

export function addUser(login, password, icon) {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);

    const options = {
        method: 'POST',
        body: formData
    };

    return dispatch => fetch(`${APP_HOST_NAME}/api/user/`, options)
        .then(dispatch({
            type: signInTypes.ADD_USER
        }));
}
