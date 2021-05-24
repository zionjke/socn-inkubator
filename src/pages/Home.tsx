import * as React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import {Header} from "../components/Header";
import {Menu} from "../components/Menu";
import {Profile} from './Profile';
import {Route} from 'react-router-dom';
import {Dialogs} from "./Dialogs";


type Props = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const Home: React.FC<Props> = ({}) => {

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
                        <Route exact path='/profile'
                               render={() => <Profile/>}/>
                        <Route path='/dialogs'
                               render={() => <Dialogs />}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
