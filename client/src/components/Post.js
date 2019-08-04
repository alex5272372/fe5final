import React from 'react'
import {connect} from 'react-redux';

class Post extends React.Component {
    render() {
        const {likes} = this.props;

        return (
            <div>
                <h1>Post</h1>
                <h2>Likes: {likes}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        likes: state.posts.allPosts[0].likes
    };
}

export default connect(mapStateToProps)(Post)