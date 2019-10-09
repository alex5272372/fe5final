import React from 'react';
import Grid from '@material-ui/core/Grid';
import PagePosts from './PagePosts';
import PageUsers from './PageUsers';

export default function Page(props) {
    const {
        commentIndex,
        comments,
        expanded,
        photo,
        changeCommentIndex,
        onChangeComment,
        invertExpanded,
        onChangePhoto
    } = props;

    return (
        <Grid container component="main">
            <Grid item xs={7}>
                <PagePosts
                    commentIndex={commentIndex}
                    comments={comments}
                    expanded={expanded}
                    photo={photo}
                    changeCommentIndex={changeCommentIndex}
                    onChangeComment={onChangeComment}
                    invertExpanded={invertExpanded}
                    onChangePhoto={onChangePhoto}
                />
            </Grid>
            <Grid item xs={5}>
                <PageUsers />
            </Grid>
        </Grid>
    );
}
