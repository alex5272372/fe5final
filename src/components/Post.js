import React from 'react'
import {connect} from 'react-redux';

class Post extends React.Component {
    render() {
        const {reduxLikes} = this.props;

        return (
            <div>
                <h1>Post</h1>
                <h2>Likes: {reduxLikes}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reduxLikes: state.posts.likes
    };
}

export default connect(mapStateToProps)(Post)