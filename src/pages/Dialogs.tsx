import {Grid} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import * as React from 'react';
import {Dialog} from "../components/Dialog";
import {Message} from "../components/Message";

type Props = {};

let avatarLink = 'https://picsum.photos/200'

const useStyles = makeStyles((theme) => ({
    dialogs: {
        paddingTop: 25,
        paddingBottom: 25
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    dialogsUsers: {
        borderRight: '2px solid gray'
    }
}));

export const Dialogs = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.dialogs}>
            <Grid container spacing={2}>
                <Grid className={classes.dialogsUsers} item xs={3}>
                    <Dialog id={1} userName={'John'} avatarLink={"https://static.toiimg.com/photo/76729750.cms"}/>
                    <Dialog id={2} userName={'Mike'}
                            avatarLink={"https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"}/>
                    <Dialog id={3} userName={'Nick'}
                            avatarLink={"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"}/>
                    <Dialog id={4} userName={'Dan'}
                            avatarLink={"https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"}/>
                </Grid>
                <Grid item xs={9}>
                    <Message id={1} message={'Hi'}/>
                    <Message id={2} message={'How are you'}/>
                    <Message id={3} message={'Im fine'}/>
                </Grid>
            </Grid>
        </div>
    );
};
