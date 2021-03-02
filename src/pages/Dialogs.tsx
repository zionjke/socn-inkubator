import {Button, Grid, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import * as React from 'react';
import {Dialog} from "../components/Dialog";
import {Message} from "../components/Message";
import {MessagesPageType} from '../types/types';


type Props = {
    state: MessagesPageType
};


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
    },
    messagesActions: {
        display: 'flex',
        marginTop: 35,
        marginLeft: 45
    },
    messagesActionsButton: {
        marginLeft: 35
    }
}));

export const Dialogs: React.FC<Props> = ({state}) => {
    const {dialogs, messages} = state
    const classes = useStyles()
    return (
        <div className={classes.dialogs}>
            <Grid container spacing={2}>
                <Grid className={classes.dialogsUsers} item xs={3}>
                    {
                        dialogs.map(dialog => (
                            <Dialog key={dialog.id}
                                    userName={dialog.userName}
                                    avatarLink={dialog.avatarLink}
                                    id={dialog.id}/>
                        ))
                    }
                </Grid>
                <Grid item xs={9}>
                    {
                        messages.map(m => (
                            <Message key={m.id}
                                     id={m.id}
                                     message={m.message}/>
                        ))
                    }
                    <div className={classes.messagesActions}>
                        <TextField
                            id="outlined-basic"
                            label="Введите сообщение"
                            variant="standard"/>
                        <Button
                            className={classes.messagesActionsButton}
                            variant="contained"
                            color="primary">
                            Отправить
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
