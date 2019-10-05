import React from 'react';
import {connect} from "react-redux";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {APP_HOST_NAME} from '../settings';
import {userTypes, modifyUser} from "../actions/userActions";
import {CardContent} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: 'flex',
        alignItems: 'center'
    },
    media: {
        height: 80,
        width: 80,
        borderRadius: '50%'
    },
    login: {
        display: 'flex'
    }
});

function UserCard(props) {
    const classes = useStyles();
    const {dispatch, date, message} = props;
    const {index, allUsers} = props.users;

    return (
        <Card
            className={classes.card}
        >
            <CardMedia
                image={`${APP_HOST_NAME}/uploads/${allUsers[props.index].icon}`}
                className={classes.media}
                onClick={() => dispatch({type: userTypes.USER_POSTS, payload: props.index})}
            />
            <CardContent>
                <div className={classes.login}>
                    <Typography
                        variant="h5"
                        onClick={() => dispatch({type: userTypes.USER_POSTS, payload: props.index})}
                    >
                        {allUsers[props.index].login}
                    </Typography>
                    <Typography variant="caption">{date}</Typography>
                </div>
                <Typography variant="body1">{message}</Typography>
            </CardContent>

            {!(message || date) && index !== props.index && !allUsers[index].subs.includes(allUsers[props.index]._id) &&
            <Button size="small" color="primary" onClick={() => dispatch(modifyUser(allUsers[index], userTypes.SUBSCRIBE, allUsers[props.index]._id))}>
                Subscribe
            </Button>
            }
            {!(message || date) && index !== props.index && allUsers[index].subs.includes(allUsers[props.index]._id) &&
            <Button size="small" color="primary" onClick={() => dispatch(modifyUser(allUsers[index], userTypes.UNSUBSCRIBE, allUsers[props.index]._id))}>
                Unsubscribe
            </Button>
            }
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserCard);