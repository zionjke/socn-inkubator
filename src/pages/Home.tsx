import * as React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import {Header} from "../components/Header";
import {Menu} from "../components/Menu";
import { Profile } from './Profile';

type Props = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const Home = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
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
                        <Profile/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
