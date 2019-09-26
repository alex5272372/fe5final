import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import Page from '../components/Page';
import UserCard from "../components/UserCard";

class PageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentIndex: -1,
            comments: [],
            photo: ''
        };

        this.onChangeCommentIndex = this.onChangeCommentIndex.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);
    }

    onChangeCommentIndex(event) {
        this.setState({commentIndex: event.target.value});
    }

    onChangeComment(event) {
        const newComments = this.state.comments.slice();
        newComments[this.state.commentIndex] = event.target.value;
        this.setState({comments: newComments});
    }

    onChangePhoto(event){
        this.setState({photo: event.target.value});
    }

    render() {
        const {
            commentIndex,
            comments,
            photo
        } = this.state;

        if (this.props.isFetching) {
            return (
                <Fragment>
                    <UserCard index={this.props.index} />
                    <Page
                        commentIndex={commentIndex}
                        comments={comments}
                        photo={photo}
                        onChangeCommentIndex={this.onChangeCommentIndex}
                        onChangeComment={this.onChangeComment}
                        onChangePhoto={this.onChangePhoto}
                    />
                </Fragment>
             )
        } else {
            return (
                <Redirect to="/signin" />
            )
        }
    }
}

function mapStateToProps(store) {
    return {
        index: store.users.index,
        isFetching: store.users.allUsers.length !== 0
    }
}

export default connect(mapStateToProps)(PageContainer);
