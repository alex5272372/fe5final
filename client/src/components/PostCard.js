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

import tileData from '../tileData';
import {newComment,newLike} from "../actions/pageActions";

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
    commentIndex,
    comment,
    onChangeCommentIndex,
    onChangeComment,
    dispatch
  } = props;

  return (
      <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={tileData[0].img}
            title="Contemplative Reptile"
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
          />
          <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => dispatch(newComment())}
          >
            comment
          </Button>
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
    return {}
}

export default connect(mapStateToProps)(PostCard);
