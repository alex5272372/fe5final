import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from "@material-ui/core/TextField";

import PostCard from './PostCard';

const useStyles = makeStyles(theme => ({
    root: {
    width: '100%',
    },
    divider: {
        height: 10,
    },
    newPost: {
        display: 'flex',
    },
}));

function PagePosts(props) {
    const classes = useStyles();
    const {
        commentIndex,
        comments,
        photo,
        onChangeCommentIndex,
        onChangeComment,
        onChangePhoto,
        dispatch
    } = props;

    return (
        <Fragment>
            <List className={classes.root}>
                <ListItem  alignItems="flex-start">
                    <PostCard
                        commentIndex={commentIndex}
                        comment={'comment'}
                        onChangeCommentIndex={onChangeCommentIndex}
                        onChangeComment={onChangeComment}
                    />
                </ListItem>
                <ListItem  alignItems="flex-start">
                    <PostCard
                        commentIndex={commentIndex}
                        comment={'comment'}
                        onChangeCommentIndex={onChangeCommentIndex}
                        onChangeComment={onChangeComment}
                    />
                </ListItem>
            </List>
            <Divider component="div" className={classes.divider}/>
            <div className={classes.newPost}>
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
                >
                    create post
                </Button>
            </div>
        </Fragment>
    );
}

function mapStateToProps(store) {
  return {}
}

export default connect(mapStateToProps)(PagePosts);
