import * as React from 'react';
import { Grid, makeStyles, Paper} from "@material-ui/core";
import {Header} from "../components/Header";
import {Menu} from "../components/Menu";
import {Profile} from './Profile';
import {Route} from 'react-router-dom';
import {Dialogs} from "./Dialogs";
import {DialogType, MessageType, PostType} from "../types/types";

type Props = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const Home: React.FC<Props> = ({posts, dialogs, messages}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={2}>
                        <Menu/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={2}>
                        <Route exact path='/profile' render={() => <Profile posts={posts}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs messages={messages} dialogs={dialogs}/>}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
