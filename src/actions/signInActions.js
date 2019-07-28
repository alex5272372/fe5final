export const signInTypes = {
    CHANGE_LOGIN: 'CHANGE_LOGIN',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CHANGE_ICON: 'CHANGE_ICON',
    SIGN_IN_USER: 'SIGN_IN_USER',
    ADD_USER: 'ADD_USER',
    MODIFY_USER: 'MODIFY_USER'
};

export function changeLogin(login) {
    return {
        type: signInTypes.CHANGE_LOGIN,
        payload: login
    }
}

export function changePassword(password) {
    return {
        type: signInTypes.CHANGE_PASSWORD,
        payload: password
    }
}

export function changeIcon(icon) {
    return {
        type: signInTypes.CHANGE_ICON,
        payload: icon
    }
}

export function signInUser(login, password) {
    return {
        type: signInTypes.ADD_USER,
        payload: {login, password}
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
