import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import UserCard from "./UserCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  divider: {
    height: 10,
  },
}));

function PageUsers(props) {
  const classes = useStyles();
  const {index, allUsers} = props.users;

  const subItems = allUsers.map((val, i) =>
    <ListItem alignItems="flex-start" key={val._id}>
      <UserCard index={i} />
    </ListItem>
  ).filter((val, i) => i !== index && allUsers[index].subs.includes(allUsers[i]._id));

  const unsubItems = allUsers.map((val, i) =>
    <ListItem alignItems="flex-start" key={val._id}>
      <UserCard index={i} />
    </ListItem>
  ).filter((val, i) => i !== index && !allUsers[index].subs.includes(allUsers[i]._id));

  return (
    <List className={classes.root}>
      {subItems}
      <Divider component="li" className={classes.divider}/>
      {unsubItems}
    </List>
  );
}

function mapStateToProps(store) {
  return {
    users: store.users
  }
}

export default connect(mapStateToProps)(PageUsers);
