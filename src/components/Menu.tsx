
import * as React from 'react';
import {Divider, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import ProfileIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import NewsIcon from '@material-ui/icons/Announcement';
import SettingsIcon from '@material-ui/icons/Settings';

type Props = {

};

const useStyles = makeStyles((theme) => ({
    menu: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    menuIcon: {
        marginRight: 10
    }
}));


export const Menu = (props: Props) => {
    const classes = useStyles();
    return (
        <List component="nav" className={classes.menu} aria-label="mailbox folders">
            <ListItem button>
                <ProfileIcon className={classes.menuIcon} color='primary'/>
                <ListItemText primary="Профиль" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <MessageIcon color='primary' className={classes.menuIcon}/>
                <ListItemText primary="Сообщения" />
            </ListItem>
            <ListItem  button>
                <NewsIcon color='primary' className={classes.menuIcon} />
                <ListItemText primary="Новости" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <SettingsIcon color='primary' className={classes.menuIcon}/>
                <ListItemText primary="Настройки" />
            </ListItem>
        </List>
    );
};
