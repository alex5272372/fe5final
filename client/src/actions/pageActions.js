import {APP_HOST_NAME} from '../settings';

export const pageTypes = {
    NEW_POST: 'NEW_POST',
    NEW_COMMENT: 'NEW_COMMENT',
    NEW_LIKE: 'NEW_LIKE'
};

export function newPost(postUser) {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);
    formData.append('postUser', postUser);

    const options = {
        method: 'POST',
        body: formData
    };
 
    return dispatch => fetch(`${APP_HOST_NAME}/api/post/`, options)
        .then(response => response.json())
        .then(allPosts => {
            return dispatch({
                type: pageTypes.NEW_POST,
                payload: allPosts
            })
        })
}

export function newComment() {
    return {
        type: pageTypes.NEW_COMMENT
    }
}

export function newLike() {
    return {
        type: pageTypes.NEW_LIKE
    }
}
