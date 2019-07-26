export const postTypes = {
    NEW_LIKE: 'NEW_LIKE'
};

export function newLike() {
    return {
        type: postTypes.NEW_LIKE
    }
}
