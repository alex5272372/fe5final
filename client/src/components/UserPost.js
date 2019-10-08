import React from 'react';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import {
    Dialog,
    DialogContent,
    DialogActions,
    List,
    ListItem,
    Button
} from '@material-ui/core';

import UserCard from "./UserCard";
import {userTypes} from "../actions/userActions";
import {APP_HOST_NAME} from "../settings";

const useStyles = makeStyles(theme => ({
    photo: {
        height: 500,
        objectFit: 'contain'
    }
}));

function UserPost(props) {
    const classes = useStyles();
    const {
        index,
        post,
        allUsers,
        dispatch
    } = props;

    const dateFormat = new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let photo = null;
    let items = null;
    if (index !== -1) {
        photo = (<img className={classes.photo} src={APP_HOST_NAME + '/uploads/' + post.photo} alt={post.postDate} />);

        items = post.comments.map((val, i) =>
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
        <div>
            <Dialog
                open={index !== -1}
                onClose={() => dispatch({type: userTypes.CLOSE_POST})}
                maxWidth="lg"
            >
                <DialogContent>
                    {photo}
                    <List>
                        {items}
                    </List>

                </DialogContent>

                <DialogActions>
                    <Button onClick={() => dispatch({type: userTypes.CLOSE_POST})} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        index: state.posts.index,
        post: state.posts.allPosts[state.posts.index],
        allUsers: state.users.allUsers
    };
}

export default connect(mapStateToProps)(UserPost)
