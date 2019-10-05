import {APP_HOST_NAME} from '../settings';

export const userTypes = {
    SUBSCRIBE: 'SUBSCRIBE',
    UNSUBSCRIBE: 'UNSUBSCRIBE',
    USER_POSTS: 'USER_POSTS',
    ALL_POSTS: 'ALL_POSTS'
};

export function modifyUser(user, type, id) {
    let subs;
    if (type === userTypes.SUBSCRIBE) {
        subs = user.subs.slice();
        subs.push(id);
    } else if (type === userTypes.UNSUBSCRIBE) {
        subs = user.subs.filter(val => val !== id);
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
