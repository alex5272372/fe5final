import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";

import {userTypes} from "../actions/userActions";
import UserCard from "./UserCard";
import {APP_HOST_NAME} from "../settings";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }
}));

function UserPosts(props) {
    const classes = useStyles();
    const {
        targetIndex,
        allPosts,
        dispatch
    } = props;

    return (
        <Fragment>
            <Box
                display="flex"
                alignItems="center"
            >
                <UserCard index={targetIndex} />
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => dispatch({type: userTypes.ALL_POSTS, payload: -1})}
                >
                    back to all posts
                </Button>
            </Box>
            <div className={classes.root}>
                <GridList cellHeight={200}>
                    {allPosts.map(post => (
                        <GridListTile key={post._id}>
                            <img src={`${APP_HOST_NAME}/uploads/${post.photo}`} alt={post.postDate}/>
                            <GridListTileBar
                                title={post.postDate}
                                subtitle={<span>by: {post.postUser}</span>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Fragment>
);
}

function mapStateToProps(store) {
    return {
        targetIndex: store.users.targetIndex,
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(UserPosts);
