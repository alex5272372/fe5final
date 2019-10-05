import React from 'react';
import Grid from '@material-ui/core/Grid';
import PagePosts from './PagePosts';
import PageUsers from './PageUsers';

export default function Page(props) {
    const {
        commentIndex,
        comments,
        photo,
        changeCommentIndex,
        onChangeComment,
        onChangePhoto
    } = props;

    return (
        <Grid container component="main">
            <Grid item xs={7}>
                <PagePosts
                    commentIndex={commentIndex}
                    comments={comments}
                    photo={photo}
                    changeCommentIndex={changeCommentIndex}
                    onChangeComment={onChangeComment}
                    onChangePhoto={onChangePhoto}
                />
            </Grid>
            <Grid item xs={5}>
                <PageUsers />
            </Grid>
        </Grid>
    );
}
