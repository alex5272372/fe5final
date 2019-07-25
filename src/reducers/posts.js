import {NEW_LIKE} from '../actions';

const initialState = {
    postDate: '',
    photo: '',
    likes: 0,
    comments: ''
};

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_LIKE:
            return {...state, likes: state.likes + 1};
        default:
            return state;
    }
}

export default postsReducer;
