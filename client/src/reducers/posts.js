import {actionTypes} from '../actions';

const initialState = {
    index: 0,
    message: '',
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
                index: 0,
                message: '',
                allPosts: action.payload.allPosts
            };

        case actionTypes.NEW_POST:
            return {
                index: 0,
                message: '',
                allPosts: action.payload
            };

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
        message: state.message,
        allPosts: newPosts
    };
}
