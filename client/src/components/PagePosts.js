import {React, Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from "@material-ui/core/TextField";

import PostCard from './PostCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function PagePosts(props) {
  const classes = useStyles();
  const {
    commentIndex,
    comments,
    photo,
    onChangeCommentIndex,
    onChangeComment,
    onChangePhoto,
    dispatch
  } = props;

  return (
    <Fragment>
      <List className={classes.root}>
        <ListItem  alignItems="flex-start">
          <PostCard
            commentIndex={commentIndex}
            comment={'comment'}
            onChangeCommentIndex={onChangeCommentIndex}
            onChangeComment={onChangeComment}
          />
        </ListItem>
        <ListItem  alignItems="flex-start">
          <PostCard
              commentIndex={commentIndex}
              comment={'comment'}
              onChangeCommentIndex={onChangeCommentIndex}
              onChangeComment={onChangeComment}
          />
        </ListItem>
      </List>

      <TextField
        type="file"
        variant="outlined"
        margin="normal"
        fullWidth
        name="photo"
        id="photo"
        autoComplete="photo"
        value={photo}
        onChange={onChangePhoto}
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        create post
      </Button>
    </Fragment>
  );
}

function mapStateToProps(store) {
  return {}
}

export default connect(mapStateToProps)(PagePosts);
