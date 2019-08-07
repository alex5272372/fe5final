import React, {Component} from 'react'
import Page from '../components/Page';

export default class PageContainer extends Component {
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
            <Page
                comment={comment}
                onChangeComment={this.onChangeComment}
            />
        )
    }
}
