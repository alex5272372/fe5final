import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import iconsData from '../iconsData';
import {connect} from "react-redux";

const useStyles = makeStyles({
  media: {
    display: 'inline-block',
    height: 100,
    width: 100
  },
  content: {
    display: 'inline-block'
  },
  actions: {
    display: 'inline-block'
  }
});

function UserCard(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={iconsData[props.users.index]}
          title="Contemplative Reptile"
        />
        <CardContent
          className={classes.content}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {props.users.allUsers[props.users.index].login}
          </Typography>
          <Button size="small" color="primary">
            Subscribe
          </Button>
          <Button size="small" color="primary">
            Unsubscribe
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserCard);