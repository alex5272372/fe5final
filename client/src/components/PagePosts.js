import React from 'react';
import {connect} from "react-redux";

import {
    Button,
    List,
    ListItem,
    TextField,
    Box
} from '@material-ui/core';

import PostCard from './PostCard';
import {newPost} from "../actions/pageActions";

function PagePosts(props) {
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
        </List>
    );
}

function mapStateToProps(store) {
    return {
        user: store.users.allUsers[store.users.index],
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(PagePosts);
