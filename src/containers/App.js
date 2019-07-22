import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';

import {Auth} from '../components/Auth';
import {Page} from '../components/Page';
import {Post} from '../components/Post';
import {User} from '../components/User';

class App extends Component {
    render() {
        return (
            <div>
                <Auth />
                <Page />
                <Post />
                <User />
            </div>
        );
/*
        return (<div>
            <section>Auth login: {this.props.auth.login}</section>
            <section>Page login: {this.props.page.login}</section>
            <section>Post login: {this.props.post.login}</section>
            <section>User login: {this.props.user.login}</section>
        </div>)
*/
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        page: state.page,
        post: state.post,
        user: state.user
    }
}

export default connect(mapStateToProps)(App)