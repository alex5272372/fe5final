import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";

import {APP_HOST_NAME} from '../settings';
import {newComment,newLike} from "../actions/pageActions";
import UserCard from "./UserCard";
import { element } from 'prop-types';

const useStyles = makeStyles({
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 300,
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
        allUsers,
        allPosts,
        dispatch
    } = props;
    
    const postDate = new Date(allPosts[index].postDate);
    const userIndex = allUsers.findIndex(element => element._id === allPosts[index].postUser);

    return (
        <Card className={classes.card}>
            <UserCard
                index={userIndex}
                message={postDate.toDateString()}
            />
            <CardMedia
                className={classes.media}
                image={`${APP_HOST_NAME}/uploads/${allPosts[index].photo}`}
                title="Post photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
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
                        onClick={() => dispatch(newComment())}
                    >
                        comment
                    </Button>
                }
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => dispatch(newLike())}
                >
                    like
                </Button>
            </CardActions>
        </Card>
    );
}

function mapStateToProps(store) {
    return {
        allUsers: store.users.allUsers,
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(PostCard);
