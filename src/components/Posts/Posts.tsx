import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import * as React from 'react';
import {Post} from "./Post";
import {ChangeEvent, useState} from "react";
import {PostType} from "../../types/types";

type Props = {
    posts: Array<PostType>
    addPost: (text:string) => void
};

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

export const Posts: React.FC<Props> = ({posts,addPost}) => {
    const classes = useStyles();
    const [postMessage, setPostMessage] = useState<string>('')

    const onClickAddPost = () => {
        addPost(postMessage)
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
