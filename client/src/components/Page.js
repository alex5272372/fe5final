import React from 'react';
import {connect} from "react-redux";

import {
    getUsers,
    newLike
} from "../actions/pageActions";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {green, lightBlue, yellow} from "@material-ui/core/colors";

import PagePosts from './PagePosts';
import PageUsers from './PageUsers';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: lightBlue,
    },
    posts: {
        backgroundColor: green,
    },
    users: {
        backgroundColor: yellow,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Page(props) {
    const classes = useStyles();
    const {
        comment,
        onChangeComment,
        dispatch,
        users
    } = props;

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={8} className={classes.posts}>
                <PagePosts />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="comment"
                    label="Comment"
                    name="comment"
                    value={comment}
                    onChange={onChangeComment}
                />

                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => dispatch(newLike())}
                >
                    More redux likes
                </Button>
            </Grid>

            <Grid item xs={4} className={classes.users}>
                <PageUsers />

                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => dispatch(getUsers())}
                >
                    Get users
                </Button>

            </Grid>
        </Grid>
    );
}

function mapStateToProps(store) {
    return {
        users: store.users,
    }
}

export default connect(mapStateToProps)(Page);
