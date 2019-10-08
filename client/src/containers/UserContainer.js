import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import UserPosts from '../components/UserPosts';
import UserPost from '../components/UserPost';

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverPost: ''
        };

        this.changeHoverPost = this.changeHoverPost.bind(this);
    }

    changeHoverPost(id) {
        this.setState({hoverPost: id});
    }

    render() {
        if (this.props.targetIndex === -1) {
            return (
                <Redirect to="/page"/>
            )
        } else if(this.props.isFetching) {
            return (
                <Fragment>
                    <UserPosts
                        hoverPost={this.state.hoverPost}
                        changeHoverPost={this.changeHoverPost}
                    />
                    <UserPost postIndex={0} />
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
