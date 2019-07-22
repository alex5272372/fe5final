import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (<div>
            <section>Page login: {this.props.page.login}</section>
            <section>Post login: {this.props.post.login}</section>
            <section>User login: {this.props.user.login}</section>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        post: state.post,
        user: state.user
    }
}

export default connect(mapStateToProps)(App)