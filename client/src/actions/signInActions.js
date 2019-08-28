import {APP_HOST_NAME} from '../settings';

export const signInTypes = {
    SIGN_IN_USER: 'SIGN_IN_USER',
    ADD_USER: 'ADD_USER',
    MODIFY_USER: 'MODIFY_USER'
};

export function signInUser(login, password) {
    return (dispatch) => {
        fetch(`https://cors-anywhere.herokuapp.com/${APP_HOST_NAME}/api/users/`)
            .then(response => response.json())
            .then(allUsers => {
                const index = allUsers.findIndex(user => user.login == login)

                return dispatch({
                        type: signInTypes.SIGN_IN_USER,
                        payload: {index, allUsers}
                    })
            })
    }
}

export function addUser(login, password, icon) {
    return {
        type: signInTypes.ADD_USER,
        payload: {login, password, icon}
    }
}

export function modifyUser(password, icon) {
    return {
        type: signInTypes.MODIFY_USER,
        payload: {password, icon}
    }
}
