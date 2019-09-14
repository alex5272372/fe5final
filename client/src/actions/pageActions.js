import {APP_HOST_NAME} from '../settings';

export const pageTypes = {
    SUBSCRIBE: 'SUBSCRIBE',
    UNSUBSCRIBE: 'UNSUBSCRIBE',
    NEW_LIKE: 'NEW_LIKE'
};

export function modifyUser(user, type, id) {
    let subs = user.subs;
    if (type === pageTypes.SUBSCRIBE) {
        subs.push(id);
    } else if (type === pageTypes.UNSUBSCRIBE) {
        subs = subs.filter(val => val !== id);
    }

    const data = {
        login: user.login,
        password: user.password,
        icon: user.icon,
        subs: subs
    };

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return dispatch => fetch(`${APP_HOST_NAME}/api/user/${user._id}`, options)
        .then(dispatch({
            type: type,
            payload: subs
        }));
}

export function newLike() {
    return {
        type: pageTypes.NEW_LIKE
    }
}
