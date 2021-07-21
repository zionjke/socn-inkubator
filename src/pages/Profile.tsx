import {createStyles, makeStyles} from '@material-ui/core';
import * as React from 'react';
import {Posts} from "../components/Posts/Posts";
import {ProfileInfo} from "../components/ProfileInfo";
import {PostType} from "../types/types";



type Props = {
    posts: Array<PostType>
    addPost: (text:string) => void
};

export let avatarLink = 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'

const useStyles = makeStyles((theme) =>
    createStyles({
        profile: {
            paddingTop: 35,
            paddingLeft: 45,
            paddingBottom: 35
        },
        profileInfo: {
            display: 'flex'
        },
        avatar: {
            width: 150,
            height: 150
        },
        profileText: {
            marginLeft: 35
        },
        profileTextName: {
            marginBottom: 15
        }
    }),
);

export const Profile:React.FC<Props> = ({posts,addPost}) => {
    const classes = useStyles();
    const MemoPosts = React.memo(Posts)
    return (
        <div className={classes.profile}>
            <ProfileInfo avatarLink={avatarLink}/>
            <MemoPosts posts={posts} addPost={addPost} />
        </div>
    );
};
