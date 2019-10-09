import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import {Add} from '@material-ui/icons';
import {
    Button,
    List,
    ListItem,
    TextField,
    Box,
    Fab
} from '@material-ui/core';

import PostCard from './PostCard';
import {
    pageTypes,
    newPost
} from "../actions/pageActions";

const useStyles = makeStyles({
    margin: {
      marginLeft: '45%'
    }
});

function PagePosts(props) {
    const classes = useStyles();
    const {
        commentIndex,
        comments,
        expanded,
        photo,
        changeCommentIndex,
        onChangeComment,
        invertExpanded,
        onChangePhoto,
        user,
        visible,
        allPosts,
        dispatch
    } = props;

    const items = allPosts.sort((a, b) => b.postDate - a.postDate)
    .filter((val, i) => i < visible)
    .map((val, i) =>
        <ListItem  alignItems="flex-start" key={val._id}>
            <PostCard
                index={i}
                commentIndex={commentIndex}
                comment={comments[i]}
                expanded={expanded[i]}
                changeCommentIndex={changeCommentIndex}
                onChangeComment={onChangeComment}
                invertExpanded={invertExpanded}
            />
        </ListItem>
    );

    return (
        <List>
            <Box
                border={4}
                borderColor="primary.main"
                borderRadius={8}
            >
                <ListItem alignItems="center" key={-1}>
                    <form noValidate>
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
                    </form>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(newPost(user._id, photo))}
                    >
                        create post
                    </Button>
                </ListItem>
            </Box>
            {items}
            {visible < allPosts.length && <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.margin}
                onClick={() => dispatch({type: pageTypes.MORE_POSTS})}
            >
                <Add />
            </Fab>}
        </List>
    );
}

function mapStateToProps(store) {
    return {
        user: store.users.allUsers[store.users.index],
        visible: store.posts.visible,
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(PagePosts);
