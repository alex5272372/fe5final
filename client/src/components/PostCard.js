import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from "@material-ui/core/TextField";

import {APP_HOST_NAME} from '../settings';
import {newComment,newLike} from "../actions/pageActions";
import UserCard from "./UserCard";

const useStyles = makeStyles({
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 300,
    },
    list: {
        width: '100%',
    },
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
                message={'(' + dateFormat.format(val.date) + ') ' + val.comment}
            />
        </ListItem>
    );

    return (
        <Card className={classes.card}>
            <UserCard
                index={postUserIndex}
                message={dateFormat.format(postDate)}
            />
            <CardMedia
                className={classes.media}
                image={`${APP_HOST_NAME}/uploads/${allPosts[index].photo}`}
                title="Post photo"
            />
            <CardContent>
                <List className={classes.list}>
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
