import {actionTypes} from '../actions';

/*function createComment() {
    return {
        date: '',
        user: '',
        comment: ''
    }
}*/

function createPost() {
    return {
        _id: '',
        postDate: '',
        postUser: '',
        photo: '',
        likes: 0,
        comments: []
    }
}

const initialState = {
    index: 0,
    allPosts: [createPost()],
    isFetching: false
};

function postsReducer(state = initialState, action) {
    const newPosts = state.allPosts.map(value => ({...value, comments: value.comments.slice()}));

    switch (action.type) {
        case actionTypes.NEW_LIKE:
            newPosts[state.index].likes++;
            break;

        default:
            return state;
    }

    return {
        index: newPosts.length - 1,
        allPosts: newPosts,
        isFetching: state.isFetching
    };
}

export default postsReducer;
