import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import SignInContainer from './SignInContainer';
import PageContainer from './PageContainer';
import UserContainer from './UserContainer';

// For debugging {
import {Link} from 'react-router-dom'
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Sign in</Link></li>
                <li><Link to='/page'>Main page</Link></li>
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
                    <Route path='/page' component={PageContainer}/>
                    <Route path='/user' component={UserContainer}/>
                    <Route path='/' component={SignInContainer}/>
                </Switch>
            </main>
        );
    }
}

export default App;
