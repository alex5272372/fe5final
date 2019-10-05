import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import SignInContainer from './SignInContainer';
import PageContainer from './PageContainer';
import UserContainer from './UserContainer';

class App extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/page' component={PageContainer}/>
                    <Route path='/user' component={UserContainer}/>
                    <Route path='/signin' component={SignInContainer}/>
                    <Route path='/' component={SignInContainer}/>
                </Switch>
            </main>
        );
    }
}

export default App;
