import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from "@material-ui/core/TextField";

import PostCard from './PostCard';
import {newPost} from "../actions/pageActions";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    divider: {
        height: 10,
    },
    form: {
        display: 'flex',
    },
}));

function PagePosts(props) {
    const classes = useStyles();
    const {
        commentIndex,
        comments,
        photo,
        changeCommentIndex,
        onChangeComment,
        onChangePhoto,
        user,
        allPosts,
        dispatch
    } = props;

    const items = allPosts.sort((a, b) => b.postDate - a.postDate).map((val, i) =>
        <ListItem  alignItems="flex-start" key={val._id}>
            <PostCard
                index={i}
                commentIndex={commentIndex}
                comment={comments[i]}
                changeCommentIndex={changeCommentIndex}
                onChangeComment={onChangeComment}
            />
        </ListItem>
    );

    return (
        <Fragment>
            <List className={classes.root}>
                {items}
            </List>
            <Divider component="div" className={classes.divider}/>
            <form className={classes.form} noValidate>
                <TextField
                    type="file"
                    variant="outlined"
                    margin="normal"
                    name="photo"
                    id="photo"
                    autoComplete="photo"
                    value={photo}
                    onChange={onChangePhoto}
                />
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => dispatch(newPost(user._id))}
                >
                    create post
                </Button>
            </form>
        </Fragment>
    );
}

function mapStateToProps(store) {
    return {
        user: store.users.allUsers[store.users.index],
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(PagePosts);
