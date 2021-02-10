// @flow
import * as React from 'react';
import {Avatar, makeStyles, Typography} from "@material-ui/core";
import {avatarLink} from '../../pages/Profile';

type Props = {};

const useStyles = makeStyles((theme) => ({
    post: {
        display: 'flex',
        marginTop: 35,
    },
    postText: {
        marginTop: 5,
        marginLeft:15
    }
}));

export const Post = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.post}>
            <Avatar alt="My Avatar" src={avatarLink}/>
            <Typography variant='body1' className={classes.postText}>Post</Typography>
        </div>
    );
};
