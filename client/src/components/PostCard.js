import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    List,
    ListItem,
    TextField,
    Button
} from '@material-ui/core';

import {APP_HOST_NAME} from '../settings';
import {newComment,newLike} from "../actions/pageActions";
import UserCard from "./UserCard";

const useStyles = makeStyles({
    card: {
        width: '100%'
    },
    media: {
        height: 400,
    }
});

function PostCard(props) {
    const classes = useStyles();
    const {
        index,
        commentIndex,
        comment,
        changeCommentIndex,
        onChangeComment,
        userIndex,
        allUsers,
        allPosts,
        dispatch
    } = props;
    
    const postDate = new Date(allPosts[index].postDate);
    const dateFormat = new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    const postUserIndex = allUsers.findIndex(element => element._id === allPosts[index].postUser);

    const items = allPosts[index].comments.map((val, i) =>
        <ListItem  alignItems="flex-start" key={i}>
            <UserCard
                index={allUsers.findIndex(element => element._id === val.user)}
                date={dateFormat.format(val.date)}
                message={val.comment}
            />
        </ListItem>
    );

    return (
        <Card
            raised={true}
            className={classes.card}
        >
            <UserCard
                index={postUserIndex}
                date={dateFormat.format(postDate)}
            />
            <CardMedia
                className={classes.media}
                image={`${APP_HOST_NAME}/uploads/${allPosts[index].photo}`}
                title="Post photo"
                onDoubleClick={() => dispatch(newLike(allPosts[index], allUsers[userIndex]._id, index))}
            />
            <CardContent>
                <List>
                    {items}
                </List>
            </CardContent>
            <CardActions>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="comment"
                    label="Comment"
                    name="comment"
                    value={comment}
                    onChange={onChangeComment}
                    onFocus={() => changeCommentIndex(index)}
                />
                {commentIndex === index &&
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => dispatch(newComment(allPosts[index], allUsers[userIndex]._id, comment, index))}
                    >
                        comment
                    </Button>
                }
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => dispatch(newLike(allPosts[index], allUsers[userIndex]._id, index))}
                >
                    {allPosts[index].likes.indexOf(allUsers[userIndex]._id) === -1 ? 'like' : 'unlike'}
                    {'\n' + allPosts[index].likes.length}
                </Button>
            </CardActions>
        </Card>
    );
}

function mapStateToProps(store) {
    return {
        userIndex: store.users.index,
        allUsers: store.users.allUsers,
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(PostCard);
