import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import * as React from 'react';
import {Post} from "./Post";
import {PostType} from "../../types/types";
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {v1} from "uuid";
import {addNewPostActionCreator} from "../../redux/reducer/profileReducer";


type Props = {};

const useStyles = makeStyles((theme) => ({
    myPosts: {
        marginTop: 85,
        marginLeft: 15
    },
    form: {
        display: 'flex',
        marginTop: 25,
        marginBottom: 45
    },

    formTextField: {
        width: '50%'
    },

    formButton: {
        marginLeft: 25,
    }
}));

export const Posts: React.FC<Props> = ({}) => {
    const dispatch = useDispatch()
    const posts = useSelector((state: AppStateType) => state.profile.posts)
    const classes = useStyles();
    const [postMessage, setPostMessage] = useState<string>('')

    const onClickAddPost = () => {
        dispatch(addNewPostActionCreator(postMessage))
        setPostMessage('')
    }

    const onSetPostMessage = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPostMessage(e.currentTarget.value)
    }

    return (
        <div className={classes.myPosts}>
            <Typography color='primary' variant={'h6'}>
                Мои публикации
            </Typography>
            <div className={classes.form}>
                <TextField
                    onChange={onSetPostMessage}
                    value={postMessage}
                    className={classes.formTextField}
                    id="outlined-basic"
                    label="Введите текст"
                    variant="outlined"/>
                <Button onClick={onClickAddPost}
                        className={classes.formButton}
                        variant="contained"
                        color="primary">
                    Опубликовать
                </Button>
            </div>
            {
                posts.map((post) => (
                    <Post key={post.id}
                          message={post.message}
                          likesCount={post.likesCount}/>
                ))
            }
        </div>
    );
};
