import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
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
    }
}));

export default function Page(props) {
    const classes = useStyles();
    const {
        commentIndex,
        comments,
        photo,
        changeCommentIndex,
        onChangeComment,
        onChangePhoto
    } = props;

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={7} className={classes.posts}>
                <PagePosts
                    commentIndex={commentIndex}
                    comments={comments}
                    photo={photo}
                    changeCommentIndex={changeCommentIndex}
                    onChangeComment={onChangeComment}
                    onChangePhoto={onChangePhoto}
                />
            </Grid>
            <Grid item xs={5} className={classes.users}>
                <PageUsers />
            </Grid>
        </Grid>
    );
}
