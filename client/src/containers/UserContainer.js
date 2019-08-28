import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";

import UserCard from '../components/UserCard';
import UserPosts from '../components/UserPosts';
import UserPost from '../components/UserPost';

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };

        this.onChangeComment = this.onChangeComment.bind(this);
    }

    onChangeComment(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        const {comment} = this.state;

        return (
            <Fragment>
                <UserCard index={this.props.index} />
                <UserPosts />
                <UserPost />
            </Fragment>
        )
    }
}

function mapStateToProps(store) {
    return {
        index: store.users.index
    }
}

export default connect(mapStateToProps)(UserContainer);
