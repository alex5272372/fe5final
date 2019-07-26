export const signInTypes = {
    SIGN_IN_USER: 'SIGN_IN_USER',
    ADD_USER: 'ADD_USER',
    MODIFY_USER: 'MODIFY_USER'
};

export function signInUser(login, password) {
    return {
        type: signInTypes.ADD_USER,
        payload: {login, password},
    }
}

export function addUser(login, password, icon) {
    return {
        type: signInTypes.ADD_USER,
        payload: {login, password, icon},
    }
}

export function modifyUser(password, icon) {
    return {
        type: signInTypes.MODIFY_USER,
        payload: {password, icon},
    }
}
