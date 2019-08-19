import React, {Component} from 'react'
import User from '../components/User';

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
            <User
                comment={comment}
                onChangeComment={this.onChangeComment}
            />
        )
    }
}
