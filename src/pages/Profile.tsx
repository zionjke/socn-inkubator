import {createStyles, makeStyles} from '@material-ui/core';
import * as React from 'react';
import {Posts} from "../components/Posts/Posts";
import {ProfileInfo} from "../components/ProfileInfo";
import { ProfilePageType } from '../types/types';



type Props = {
    state:ProfilePageType
    addNewPost: (postMessage:string) => void
};



export let avatarLink = "https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/19598681_1574642752605734_2353472045273651560_n.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=ZHEYebPt-igAX_r3-Wx&_nc_ht=scontent.fiev6-1.fna&oh=f4923d33c176576573a0d22a7c0fc70c&oe=604681B6"

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

export const Profile:React.FC<Props> = ({state,addNewPost}) => {
    const {posts} = state
    const classes = useStyles();

    return (
        <div className={classes.profile}>
            <ProfileInfo avatarLink={avatarLink}/>
            <Posts addNewPost={addNewPost} posts={posts}/>
        </div>
    );
};
