import React from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {userTypes} from "../actions/userActions";
import {APP_HOST_NAME} from "../settings";

function UserPost(props) {
    const {index, post, dispatch} = props;

    let photo = null;
    if (index !== -1) {
        photo = (<img src={APP_HOST_NAME + '/uploads/' + post.photo} alt={post.postDate} />);
    }

    return (
        <div>
            <Dialog open={index !== -1} onClose={() => dispatch({type: userTypes.CLOSE_POST})} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                {photo}
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
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
        post: state.posts.allPosts[state.posts.index]
    };
}

export default connect(mapStateToProps)(UserPost)
