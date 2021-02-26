import * as React from 'react';
import {AppBar, IconButton, makeStyles, Toolbar,} from "@material-ui/core";
import HeaderIcon from '@material-ui/icons/Reddit';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 15
    },
    menuIcon: {
        width: 50,
        height: 50
    }
}));

type Props = {

};

export const Header = (props: Props) => {
    const classes = useStyles();
    return (
        <div className=''>
            <AppBar position="static">
                <Toolbar>
                    <Link to={'/'}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HeaderIcon className={classes.menuIcon}/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};
