import {makeStyles, Typography} from '@material-ui/core';
import {Avatar} from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    userName:string
    avatarLink: string
    id:number
};

const useStyles = makeStyles((theme) => ({
    dialog: {
        display: 'flex',
        marginBottom:15,
        alignItems: 'center',
        justifyContent: 'center',
        cursor:'pointer'
    },
    dialogAvatar: {
        width: 25,
        height: 25
    },
    dialogUserName: {
        marginLeft: 15
    }

}));

export const Dialog = ({userName,avatarLink,id}: Props) => {
    const classes = useStyles()
    return (
        <Link to={`/dialogs/${id}`}>
            <div className={classes.dialog}>
                    <Avatar className={classes.dialogAvatar} alt="Remy Sharp" src={avatarLink}/>
                <Typography className={classes.dialogUserName}>{userName}</Typography>
            </div>
        </Link>
    );
};
