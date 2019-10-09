import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    List,
    ListItem,
    TextField,
    Button,
    IconButton,
    Collapse
} from '@material-ui/core';
import {
    Favorite,
    FavoriteBorder,
    ExpandMore
} from '@material-ui/icons';

import {APP_HOST_NAME} from '../settings';
import {newComment,newLike} from "../actions/pageActions";
import UserCard from "./UserCard";

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%'
    },
    media: {
        height: 400,
        backgroundSize: 'contain'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: '45%',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

function PostCard(props) {
    const classes = useStyles();
    const {
        index,
        commentIndex,
        comment,
        expanded,
        changeCommentIndex,
        onChangeComment,
        invertExpanded,
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

    let firstItem = null;
    let items = null;

    if (allPosts[index].comments.length > 0) {
        firstItem =
            <ListItem key={0}>
                <UserCard
                    index={allUsers.findIndex(element => element._id === allPosts[index].comments[0].user)}
                    date={dateFormat.format(allPosts[index].comments[0].date)}
                    message={allPosts[index].comments[0].comment}
                />
            </ListItem>
    }

    if (allPosts[index].comments.length > 1) {
        items = allPosts[index].comments.filter((val, i) => i > 0).map((val, i) =>
            <ListItem key={i}>
                <UserCard
                    index={allUsers.findIndex(element => element._id === val.user)}
                    date={dateFormat.format(val.date)}
                    message={val.comment}
                />
            </ListItem>
        );
    }

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
                    {firstItem}
                    {allPosts[index].comments.length > 1 && <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={() => invertExpanded(index)}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>}
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {items}
                    </Collapse>
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
                    color={allPosts[index].likes.indexOf(allUsers[userIndex]._id) === -1 ? 'primary' : 'secondary'}
                    className={classes.submit}
                    onClick={() => dispatch(newLike(allPosts[index], allUsers[userIndex]._id, index))}
                >
                    {allPosts[index].likes.indexOf(allUsers[userIndex]._id) === -1 ? <FavoriteBorder/> : <Favorite/>}
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
