import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {SignIn} from '../components/SignIn';
import {Page} from '../components/Page';
import {Post} from '../components/Post';
import {User} from '../components/User';

// For debugging {
import {Link} from 'react-router-dom'
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Sign in</Link></li>
                <li><Link to='/page'>Main page</Link></li>
                <li><Link to='/post'>Card of post</Link></li>
                <li><Link to='/user'>User posts</Link></li>
            </ul>
        </nav>
    </header>
);
// }

class App extends Component {
    render() {
        return (
            <main>
                <Header/>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route path='/page' component={Page}/>
                    <Route path='/post' component={Post}/>
                    <Route path='/user' component={User}/>
                </Switch>
            </main>
        );
/*
        return (<div>
            <section>SignIn login: {this.props.auth.login}</section>
            <section>Page login: {this.props.page.login}</section>
            <section>Post login: {this.props.post.login}</section>
            <section>User login: {this.props.user.login}</section>
        </div>)
*/
    }
}

function mapStateToProps(state) {
    return {
        signIn: state.signIn,
        page: state.page,
        post: state.post,
        user: state.user
    }
}

export default connect(mapStateToProps)(App)