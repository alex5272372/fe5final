import {actionTypes} from '../actions';

const initialState = {
    index: -1,
    allPosts: []
};

export default function postsReducer(state = initialState, action) {
    const newPosts = state.allPosts.map(value => {
        const newComments = value.comments.map(comment => ({...comment}));
        return {
            ...value,
            likes: value.likes.slice(),
            comments: newComments
        }
    });

    switch (action.type) {
        case actionTypes.SIGN_IN_USER:
            return {
                index: -1,
                allPosts: action.payload.allPosts
            };

        case actionTypes.NEW_POST:
            return {
                index: -1,
                allPosts: action.payload
            };

        case actionTypes.NEW_COMMENT:
            newPosts[action.payload.index].comments = action.payload.comments;
            return {
                index: -1,
                allPosts: newPosts
            };
        
        case actionTypes.NEW_LIKE:
            newPosts[action.payload.index].likes = action.payload.likes;
            return {
                index: -1,
                allPosts: newPosts
            };

        case actionTypes.OPEN_POST:
            return {
                index: action.payload,
                allPosts: newPosts
            };

        case actionTypes.CLOSE_POST:
            return {
                index: -1,
                allPosts: newPosts
            };

        default:
            return state;
    }
}
