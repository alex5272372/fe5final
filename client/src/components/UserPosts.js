import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    Button,
    Box
} from "@material-ui/core";

import {
    Favorite,
    Comment
} from '@material-ui/icons';

import {userTypes} from "../actions/userActions";
import UserCard from "./UserCard";
import {APP_HOST_NAME} from "../settings";

const useStyles = makeStyles(theme => ({
    tile: {
        objectFit: 'contain'
    },
    tilebar: {
        height: 300,
        textAlign: 'center'
    }
}));

function UserPosts(props) {
    const classes = useStyles();
    const {
        hoverPost,
        changeHoverPost,
        targetIndex,
        targetUser,
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
            <GridList
                cellHeight={300}
                cols={4}
                spacing={8}
            >
                {allPosts.filter(post => post.postUser === targetUser._id)
                    .sort((a, b) => a.postDate - b.postDate)
                    .map(post => (
                    <GridListTile
                        onMouseEnter={() => {
                            changeHoverPost(post._id)
                        }}
                        onMouseLeave={() => {
                            changeHoverPost('')
                        }}
                        onClick={() => dispatch({
                            type: userTypes.OPEN_POST,
                            payload: allPosts.findIndex(element => element._id === post._id)
                        })}
                        key={post._id}
                        imgFullHeight={true}
                    >
                        <img className={classes.tile} src={`${APP_HOST_NAME}/uploads/${post.photo}`} alt={post.postDate}/>
                        {hoverPost === post._id &&
                            <GridListTileBar
                                className={classes.tilebar}
                                title={<Fragment><Favorite/> {post.likes.length} <br/>
                                    <Comment/> {post.comments.length}</Fragment>}
                            />
                        }
                    </GridListTile>
                ))}
            </GridList>
        </Fragment>
);
}

function mapStateToProps(store) {
    return {
        targetIndex: store.users.targetIndex,
        targetUser: store.users.allUsers[store.users.targetIndex],
        allPosts: store.posts.allPosts
    }
}

export default connect(mapStateToProps)(UserPosts);
