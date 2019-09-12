import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {APP_HOST_NAME} from '../settings';
import {pageTypes, modifyUser} from "../actions/pageActions";

const useStyles = makeStyles({
  media: {
    display: 'inline-block',
    height: 90,
    width: 90
  },
  content: {
    display: 'inline-block',
    verticalAlign: 'top'
  },
  actions: {
    display: 'inline-block'
  }
});

function UserCard(props) {
  const classes = useStyles();
  const {dispatch} = props;
  const {index, allUsers} = props.users;

  return (
    <Card>
      <CardMedia image={`${APP_HOST_NAME}/uploads/${allUsers[props.index].icon}`} className={classes.media} />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {allUsers[props.index].login}
        </Typography>
        {index !== props.index && !allUsers[index].subs.includes(allUsers[props.index]._id) &&
          <Button size="small" color="primary" onClick={() => dispatch(modifyUser(allUsers[index], pageTypes.SUBSCRIBE, allUsers[props.index]._id))}>
            Subscribe
          </Button>
        }
        {index !== props.index && allUsers[index].subs.includes(allUsers[props.index]._id) &&
          <Button size="small" color="primary" onClick={() => dispatch(modifyUser(allUsers[index], pageTypes.UNSUBSCRIBE, allUsers[props.index]._id))}>
            Unsubscribe
          </Button>
        }
      </CardContent>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserCard);