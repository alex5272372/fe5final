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

import {
    signInUser,
    addUser
} from '../actions/signInActions';

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
    const {login,
        password,
        icon,
        onChangeLogin,
        onChangePassword,
        onChangeIcon,
        dispatch
    } = props;

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
                {props.message &&
                    <Typography component="h1" variant="h5" color="error">
                        {props.message}
                    </Typography>
                }
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
                        onChange={onChangeLogin}
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
                        onChange={onChangePassword}
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
                        type="file"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="icon"
                        id="icon"
                        autoComplete="photo"
                        value={icon}
                        onChange={onChangeIcon}
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
               </form>
            </div>
        </Container>
    );
}

function mapStateToProps(store) {
    return {
        message: store.users.message
    }
}

export default connect(mapStateToProps)(SignIn);