import {actionTypes} from '../actions';

const initialState = {
    index: -1,
    allPosts: [{
        postDate: '',
        photo: '',
        likes: 0,
        comments: [],
    }]
};

function postsReducer(state = initialState, action) {
    const newPosts = state.allPosts.map(value => ({...value, comments: value.comments.slice()}));

    switch (action.type) {
        case actionTypes.NEW_LIKE:
            newPosts[0].likes++;

            return {
                index: state.index,
                allPosts: newPosts
            };
        default:
            return state;
    }
}

export default postsReducer;
