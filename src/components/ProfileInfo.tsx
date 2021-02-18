import * as React from 'react';
import {Avatar, createStyles, makeStyles, Typography} from "@material-ui/core";


type Props = {
    avatarLink: string
};

const useStyles = makeStyles((theme) =>
    createStyles({
        profileInfo: {
            display:'flex'
        },
        avatar: {
            width:150,
            height:150
        },
        profileText: {
            marginLeft:35
        },
        profileTextName: {
            marginBottom:15
        }
    }),
);

export const ProfileInfo = ({avatarLink}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.profileInfo}>
            <Avatar className={classes.avatar} alt="My Avatar" src={avatarLink}/>
            <div className={classes.profileText}>
                <Typography color='primary' className={classes.profileTextName} variant='h5'>Артем Васильев</Typography>
                <Typography variant='subtitle2'>Дата рождения: 3 февраля</Typography>
                <Typography variant='subtitle2'>Город: Киев</Typography>
                <Typography variant='subtitle2'>Где работаете: KLO.ua</Typography>
            </div>
        </div>
    );
};
