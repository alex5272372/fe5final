import React from 'react';
import {connect} from "react-redux";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {signInUser, addUser, modifyUser} from '../actions/signInActions';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn(props) {
    const classes = useStyles();
    const {login, password, icon, dispatch} = props;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="User Name"
                        name="login"
                        autoComplete="username"
                        autoFocus
                        value={login}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => dispatch(signInUser(login, password))}
                    >
                        sign in
                    </Button>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="icon"
                        label="Photo"
                        id="icon"
                        autoComplete="photo"
                        value={icon}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => dispatch(addUser(login, password, icon))}
                    >
                        create account
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => dispatch(modifyUser(password, icon))}
                    >
                        update account
                    </Button>
               </form>
            </div>
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        login: state.users.allUsers[0].login,
        password: state.users.allUsers[0].password,
        icon: state.users.allUsers[0].icon
    };
}

export default connect(mapStateToProps)(SignIn);