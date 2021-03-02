import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import * as React from 'react';
import {Post} from "./Post";
import {PostType} from "../../types/types";
import {ChangeEvent, useState} from "react";


type Props = {
    posts: Array<PostType>
    addNewPost: (postMessage:string) => void
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

export const Posts: React.FC<Props> = ({posts,addNewPost}) => {
    const classes = useStyles();
    const [messageBody, setMessageBody] = useState<string>('')

    const onSetMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageBody(e.currentTarget.value)
    }

    const onClickAddPost = () => {
        addNewPost(messageBody)
    }

    return (
        <div className={classes.myPosts}>
            <Typography color='primary' variant={'h6'}>
                Мои публикации
            </Typography>
            <div className={classes.form}>
                <TextField onChange={onSetMessageBody}
                           value={messageBody}
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
