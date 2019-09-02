import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

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

        if (this.props.isFetching) {
            return (
                <Fragment>
                    <UserCard index={this.props.index} />
                    <Page
                        comment={comment}
                        onChangeComment={this.onChangeComment}
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
