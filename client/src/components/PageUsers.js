import React from 'react';
import {connect} from "react-redux";

import {
    List,
    ListItem,
    Box
} from '@material-ui/core';

import UserCard from "./UserCard";

function PageUsers(props) {
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
    <List>
        <Box
            border={4}
            borderColor="primary.main"
            borderRadius={8}
        >
            {subItems}
        </Box>
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
