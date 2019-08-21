import React from 'react';
import {connect} from 'react-redux';
import UserPosts from './UserPosts';
import Post from './Post';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {green, lightBlue} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: lightBlue,
    },
    post: {
        backgroundColor: green,
    }
}));

function User(props) {
    const classes = useStyles();
    const {
        comment
    } = props;

    return (
        <React.Fragment>
            <UserPosts />
            <Post />
        </React.Fragment>
    );
}

function mapStateToProps(store) {
    return {
        users: store.users,
    }
}

export default connect(mapStateToProps)(User);
