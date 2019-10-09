import {APP_HOST_NAME} from '../settings';

export const pageTypes = {
    NEW_POST: 'NEW_POST',
    NEW_COMMENT: 'NEW_COMMENT',
    NEW_LIKE: 'NEW_LIKE',
    MORE_POSTS: 'MORE_POSTS'
};

export function newPost(postUser, photo) {
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

export function newComment(post, user, comment, index) {
    let comments = post.comments.map(comment => ({...comment}));
    comments.unshift({
        date: Date.now(),
        user: user,
        comment: comment
    });

    const data = {
        postDate: post.postDate,
        postUser: post.postUser,
        photo: post.photo,
        likes: post.likes,
        comments: comments
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return dispatch => fetch(`${APP_HOST_NAME}/api/post/${post._id}`, options)
        .then(dispatch({
            type: pageTypes.NEW_COMMENT,
            payload: {index, comments}
        }));
}

export function newLike(post, user, index) {
    let likes;
    if(post.likes.indexOf(user) === -1) {
        likes = post.likes.slice();
        likes.push(user);
    } else {
        likes = post.likes.filter(val => val !== user);
    }

    const data = {
        postDate: post.postDate,
        postUser: post.postUser,
        photo: post.photo,
        likes: likes,
        comments: post.comments
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return dispatch => fetch(`${APP_HOST_NAME}/api/post/${post._id}`, options)
        .then(dispatch({
            type: pageTypes.NEW_LIKE,
            payload: {index, likes}
        }));
}
