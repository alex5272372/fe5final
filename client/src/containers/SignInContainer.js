import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import SignIn from '../components/SignIn';

class SignInContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            icon: ''
        };

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeIcon = this.onChangeIcon.bind(this);
    }

    onChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    onChangeIcon(event){
        this.setState({icon: event.target.value});
    }

    render() {
        const {login, password, icon} = this.state;

        if (this.props.isFetching) {
            return (
                <Redirect to="/page" />
            )
        } else {
            return (
                <SignIn
                    login={login}
                    password={password}
                    icon={icon}
                    onChangeLogin={this.onChangeLogin}
                    onChangePassword={this.onChangePassword}
                    onChangeIcon={this.onChangeIcon}
                />
            )
        }
    }
}

function mapStateToProps(store) {
    return {
        isFetching: store.users.allUsers.length !== 0
    }
}

export default connect(mapStateToProps)(SignInContainer);
