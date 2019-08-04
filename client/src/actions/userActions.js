export const userTypes = {
    NEW_LIKE: 'NEW_LIKE'
};

export function newLike() {
    return {
        type: userTypes.NEW_LIKE
    }
}
