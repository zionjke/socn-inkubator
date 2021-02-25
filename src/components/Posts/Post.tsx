// @flow
import * as React from 'react';
import {Avatar, Badge, IconButton, makeStyles, Typography} from "@material-ui/core";
import {avatarLink} from '../../pages/Profile';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';

type Props = {
    message: string,
    likesCount: number
};

const useStyles = makeStyles((theme) => ({
    post: {
        display: 'flex',
        marginTop: 15,
    },
    postBody: {
        display: 'flex',
        flexDirection: 'column'
    },
    postText: {
        marginTop: 5,
        marginLeft: 15
    },
    postLikeIcon: {
        width: 25,
        height: 25,
    },

}));

export const Post = ({message, likesCount}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.post}>
            <Avatar alt="My Avatar" src={avatarLink}/>
            <div>
                <Typography variant='body1' className={classes.postText}>{message}</Typography>
                <IconButton aria-label="like">
                    <Badge badgeContent={likesCount} color="secondary">
                        <LikeIcon className={classes.postLikeIcon}/>
                    </Badge>
                </IconButton>
            </div>
        </div>
    );
};
