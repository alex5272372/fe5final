import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

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
        if (this.props.targetIndex === -1) {
            return (
                <Redirect to="/page"/>
            )
        } else if(this.props.isFetching) {
            return (
                <Fragment>
                    <UserPosts index={this.props.targetIndex} />
                    <UserPost postIndex={0}/>
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
        targetIndex: store.users.targetIndex,
        isFetching: store.users.allUsers.length !== 0
    }
}

export default connect(mapStateToProps)(UserContainer);
