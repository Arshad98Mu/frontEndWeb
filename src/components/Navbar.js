import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';

import React from 'react';

const drawerWidth = 240;

let styleNavbar = {
    background: 'transparent',
    boxShadow: 'none'
}

const useStyles = makeStyles(theme => ({
    rootDrawer: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButtonDrawer: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.rootDrawer}>
            <CssBaseline />
            <AppBar
                position="fixed"
                style={styleNavbar}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openDrawer,
                })}
            >
                <Toolbar>
                    <IconButton
                        aria-label="openDrawer drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButtonDrawer, {
                            [classes.hide]: openDrawer,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                 style = {{width : "600px"}}
                open = {false}
                variant="permanent"
                // className={clsx(classes.drawer, {
                //     [classes.drawerOpen]: openDrawer,
                //     [classes.drawerClose]: !openDrawer,
                // })}
                // classes={{
                //     paper: clsx({
                //         [classes.drawerOpen]: openDrawer,
                //         [classes.drawerClose]: !openDrawer,
                //     }),
                // }}
                //openDrawer={openDrawer}
            >
                <div className={classes.toolbar}>
                    <IconButton
                        onClick={handleDrawerClose}
                        className={{
                            [classes.hide]: !openDrawer,
                        }}    
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Dashboard', 'Chat', 'Settings', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                
                <List>
                    <ListItem button key="Chat">
                        <ListItemIcon> <ChatIcon /> </ListItemIcon>
                        <ListItemText primary="Chat" />
                    </ListItem>                    
                </List>
                <Divider />

                <List>
                    <ListItem button key="Profile">
                        <ListItemIcon><AccountCircle /></ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Navbar;