import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import * as React from 'react';
import {Dialog} from "../components/Dialog";
import {Message} from "../components/Message";

type Props = {};

const dialogsData = [
    {
        id: 1,
        userName: 'John',
        avatarLink: "https://static.toiimg.com/photo/76729750.cms"
    },
    {
        id: 2,
        userName: 'Mike',
        avatarLink: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
    },
    {
        id: 3,
        userName: 'Nick',
        avatarLink: "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
    },
    {
        id: 4,
        userName: 'Dan',
        avatarLink: "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
    },
]

const messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Im fine'},
]

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

export const Dialogs:React.FC<Props> = () => {
    const classes = useStyles()
    return (
        <div className={classes.dialogs}>
            <Grid container spacing={2}>
                <Grid className={classes.dialogsUsers} item xs={3}>
                    {
                        dialogsData.map(dialog => (
                            <Dialog key={dialog.id}
                                    userName={dialog.userName}
                                    avatarLink={dialog.avatarLink}
                                    id={dialog.id}/>
                        ))
                    }
                </Grid>
                <Grid item xs={9}>
                    {
                        messageData.map(m => (
                            <Message key={m.id}
                                     id={m.id}
                                     message={m.message}/>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    );
};
