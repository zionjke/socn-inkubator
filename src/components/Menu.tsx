import * as React from 'react';
import {Divider, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import ProfileIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import NewsIcon from '@material-ui/icons/Announcement';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from 'react-router-dom';

type Props = {};

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


export const Menu:React.FC<Props> = () => {
    const classes = useStyles();
    const [selectedLink, setSelectedLink] = React.useState<'profile' | 'messages'>()
    return (
        <List component="nav" className={classes.menu} aria-label="mailbox folders">
            <Link to={'/profile'}>
                <ListItem  onClick={() => setSelectedLink('profile')} selected={selectedLink === 'profile'} button>
                    <ProfileIcon className={classes.menuIcon} color='primary'/>
                    <ListItemText primary="Профиль"/>
                </ListItem>
            </Link>
            <Divider/>
            <Link to={'/dialogs'}>
                <ListItem onClick={() => setSelectedLink('messages')} selected={selectedLink === 'messages'} button divider>
                    <MessageIcon color='primary' className={classes.menuIcon}/>
                    <ListItemText primary="Сообщения"/>
                </ListItem>
            </Link>
            <ListItem button>
                <NewsIcon color='primary' className={classes.menuIcon}/>
                <ListItemText primary="Новости"/>
            </ListItem>
            <Divider light/>
            <ListItem button>
                <SettingsIcon color='primary' className={classes.menuIcon}/>
                <ListItemText primary="Настройки"/>
            </ListItem>
        </List>
    );
};
