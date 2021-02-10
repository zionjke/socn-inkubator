
import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import * as React from 'react';
import {Post} from "./Post";

type Props = {

};

const useStyles = makeStyles((theme) => ({
    myPosts: {
        marginTop: 85,
        marginLeft:15
    },
    form: {
        display: 'flex',
        marginTop: 25,
    },

    formTextField: {
        width: '50%'
    },

    formButton: {
        marginLeft: 25,
    }
}));

export const Posts = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.myPosts}>
            <Typography color='primary' variant={'h6'}>
                Мои публикации
            </Typography>
            <div className={classes.form}>
                <TextField className={classes.formTextField}  id="outlined-basic" label="Введите текст" variant="outlined" />
                <Button className={classes.formButton} variant="contained" color="primary">
                    Опубликовать
                </Button>
            </div>
            <Post/>
            <Post/>
        </div>
    );
};
