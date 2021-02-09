import * as React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {Header} from "../components/Header";

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
                   <div>
                       <ul>
                           <li>Profile</li>
                           <li>Messages</li>
                           <li></li>
                       </ul>
                   </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        Main content
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
