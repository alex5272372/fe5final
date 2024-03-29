import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import Page from '../components/Page';

class PageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentIndex: -1,
            comments: [],
            expanded: [],
            photo: ''
        };

        this.changeCommentIndex = this.changeCommentIndex.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.invertExpanded = this.invertExpanded.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);
    }

    changeCommentIndex(index) {
        this.setState({commentIndex: index});
    }

    onChangeComment(event) {
        const newComments = this.state.comments.slice();
        newComments[this.state.commentIndex] = event.target.value;
        this.setState({comments: newComments});
    }

    invertExpanded(index) {
        const newExpanded = this.state.expanded.slice();
        newExpanded[index] = !newExpanded[index];
        this.setState({expanded: newExpanded});
    }

    onChangePhoto(event){
        this.setState({photo: event.target.value});
    }

    render() {
        const {
            commentIndex,
            comments,
            expanded,
            photo
        } = this.state;

        if (this.props.targetIndex !== -1) {
            return (
                <Redirect to="/user" />
            )
        } else if (this.props.isFetching) {
            return (
                <Page
                    commentIndex={commentIndex}
                    comments={comments}
                    expanded={expanded}
                    photo={photo}
                    changeCommentIndex={this.changeCommentIndex}
                    onChangeComment={this.onChangeComment}
                    invertExpanded={this.invertExpanded}
                    onChangePhoto={this.onChangePhoto}
                />
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
        targetIndex: store.users.targetIndex,
        isFetching: store.users.allUsers.length !== 0
    }
}

export default connect(mapStateToProps)(PageContainer);
