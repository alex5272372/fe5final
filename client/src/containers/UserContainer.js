import React, {Component, Fragment} from 'react'
import UserCard from '../components/UserCard';
import UserPosts from '../components/UserPosts';
import UserPost from '../components/UserPost';

export default class UserContainer extends Component {
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
                <UserCard />
                <UserPosts />
                <UserPost />
            </Fragment>
        )
    }
}
