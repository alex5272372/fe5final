import React from 'react';
import {connect} from 'react-redux';
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
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={4} className={classes.post}>
                    Photo 1
                </Grid>
                <Grid item xs={4} className={classes.post}>
                    Photo 2
                </Grid>
                <Grid item xs={4} className={classes.post}>
                    Photo 3
                </Grid>
                <Grid item xs={4} className={classes.post}>
                    Photo 4
                </Grid>
            </Grid>
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
