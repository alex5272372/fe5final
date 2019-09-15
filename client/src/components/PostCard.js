import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";

import tileData from '../tileData';
import {newLike} from "../actions/pageActions";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="comment"
            label="Comment"
            name="comment"
            value={comment}
            onChange={onChangeComment}
        />
        <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => dispatch(newLike())}
        >
          Like
        </Button>
      </CardActions>
    </Card>
  );
}

function mapStateToProps(store) {
  return {}
}

export default connect(mapStateToProps)(PostCard);
