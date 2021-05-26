import * as React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import {Header} from "../components/Header";
import {Menu} from "../components/Menu";
import {Profile} from './Profile';
import {Route} from 'react-router-dom';
import {Dialogs} from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {addNewPostActionCreator} from "../redux/reducer/profileReducer";
import {addNewMessageActionCreator} from "../redux/reducer/dialogsReducer";


type Props = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const Home: React.FC<Props> = ({}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const posts = useSelector((state: AppStateType) => state.profile.posts)
    const {dialogs,messages} = useSelector((state:AppStateType) => state.dialog)

    const addPost = (text:string):void => {
        dispatch(addNewPostActionCreator(text))
    }

    const addNewMessage = (text:string):void => {
        dispatch(addNewMessageActionCreator(text))
    }

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
                               render={() => <Profile posts={posts}
                                                      addPost={addPost}/>}/>
                        <Route path='/dialogs'
                               render={() => <Dialogs dialogs={dialogs}
                                                      messages={messages}
                                                      addNewMessage={addNewMessage}/>}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
