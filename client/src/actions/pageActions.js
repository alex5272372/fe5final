import {APP_HOST_NAME} from '../settings';

export const pageTypes = {
    SUBSCRIBE: 'SUBSCRIBE',
    UNSUBSCRIBE: 'UNSUBSCRIBE',
    NEW_LIKE: 'NEW_LIKE'
};

export function modifyUser(user, type, id) {
    const formData = new FormData();
    formData.append("login", user.login);
    formData.append("password", user.password);
    formData.append("icon", user.icon);

    let subs = user.subs;
    if (type === pageTypes.SUBSCRIBE) {
        subs.push(id);
    } else if (type === pageTypes.UNSUBSCRIBE) {
        subs = subs.filter(val => val !== id);
    }

    formData.append("subs", user.subs);

    const options = {
        method: 'PUT',
        body: formData
    };

    return dispatch => fetch(`${APP_HOST_NAME}/api/user/${user._id}`, options)
        .then(() => dispatch({
            type: type,
            payload: subs
        }));

/*
    return dispatch => dispatch({
        type: type,
        payload: subs
    });
*/
}

export function newLike() {
    return {
        type: pageTypes.NEW_LIKE
    }
}
