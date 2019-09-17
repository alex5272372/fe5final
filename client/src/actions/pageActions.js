import {APP_HOST_NAME} from '../settings';

export const pageTypes = {
    NEW_POST: 'NEW_POST',
    NEW_COMMENT: 'NEW_COMMENT',
    NEW_LIKE: 'NEW_LIKE'
};

export function newPost() {
    return {
        type: pageTypes.NEW_POST
    }
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
