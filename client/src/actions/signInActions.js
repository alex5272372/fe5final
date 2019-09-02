import {APP_HOST_NAME} from '../settings';

export const signInTypes = {
    SIGN_IN_USER: 'SIGN_IN_USER',
    SIGN_IN_ERROR: 'SIGN_IN_ERROR'
};

function signInDispatch(dispatch, login, password) {
   fetch(`https://cors-anywhere.herokuapp.com/${APP_HOST_NAME}/api/users/`)
       .then(response => response.json())
       .then(allUsers => {
           const index = allUsers.findIndex(user => user.login == login);

           if (index === -1) {
               return dispatch({
                       type: signInTypes.SIGN_IN_ERROR,
                       payload: {error: 'ERROR: User not found'}
                   })
           } else {
               return dispatch({
                       type: signInTypes.SIGN_IN_USER,
                       payload: {index, allUsers}
                   })
           }
       })
}

export function signInUser(login, password) {
    return dispatch => signInDispatch(dispatch, login, password);
}

export function addUser(login, password, icon) {
   fetch(`https://cors-anywhere.herokuapp.com/${APP_HOST_NAME}/api/users/`,
       {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({login, password, icon})
        })
       .then(() => dispatch => signInDispatch(dispatch, login, password));
}

export function modifyUser(login, password, icon) {
   fetch(`https://cors-anywhere.herokuapp.com/${APP_HOST_NAME}/api/users/`,
       {
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({login, password, icon})
        })
       .then(() => dispatch => signInDispatch(dispatch, login, password));
}
