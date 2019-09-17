import {actionTypes} from '../actions';

const initialState = {
    index: 0,
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
        case actionTypes.NEW_POST:
            console.log('NEW_POST');
            break;

        case actionTypes.NEW_COMMENT:
            console.log('NEW_COMMENT');
            break;

        case actionTypes.NEW_LIKE:
            console.log('NEW_LIKE');
            break;

        default:
            return state;
    }

    return {
        index: state.index,
        allPosts: newPosts
    };
}
