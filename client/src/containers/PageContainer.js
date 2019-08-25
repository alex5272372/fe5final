import React, {Component, Fragment} from 'react'
import Page from '../components/Page';
import UserCard from "../components/UserCard";

class PageContainer extends Component {
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
                <Page
                    comment={comment}
                    onChangeComment={this.onChangeComment}
                />
            </Fragment>
        )
    }
}

export default PageContainer;
