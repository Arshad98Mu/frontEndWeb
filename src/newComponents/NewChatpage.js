import React, { useState, useEffect } from 'react';
import NavbarAndDrawer from './commonComponents/NavbarAndDrawer';

//from material-ui start
import { Grid, IconButton, TextField, Typography, Card } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
//from material-ui end

const useStyles = makeStyles(theme => ({
    chatbox: {
        margin: 'auto',
    },
    sendicon: {
        height: 64,
        width: 64,
        backgroundColor: "#ffe082",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardself: {
        width: 450,
        height: 100,
        fontSize: 28,
        padding: theme.spacing(1),
        margin: '5px 5px 5px auto',
    },
    cardother: {
        width: 450,
        fontSize: 28,
        padding: theme.spacing(1),
        margin: '5px auto 5px 5px',
        backgroundColor: '#ffe082',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "auto",
    },
}));

function updateWindowDimensions() {
    const temporaryheight = window.innerHeight;
    return temporaryheight;
};

function NewChatpage() {
    const classes = useStyles();

    //chat window height
    const [chatheight, setchatHeight] = useState(updateWindowDimensions());

    //to set height of the chat window
    useEffect(() => {
        function handleResize() {
            setchatHeight(updateWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <NavbarAndDrawer />
            <div style={{ height: 64 }} />
            <Grid direction="column">
                <Grid item
                    style={{ backgroundColor: "#fff8e1"}}
                    xs={12} sm={10} md={8} lg={8} xl={8}
                    className={classes.chatbox}
                >
                    <Grid style={{height: chatheight - 128}} className={classes.mainContainer}>
                        <Card className={classes.cardself} >
                            <Typography variant="body2">
                                You know what I love the most about you? You know what I love the most about you? You know what I love the most about you?
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2">
                                What?
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2">
                                That you're a strong. independent women...
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2">
                                Awww!! Thanks, love!
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2" >
                                Who doesn't need any man to feel complete...
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2">
                                Hmmmm...Okay
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2">
                                I think me being with you is an insult to your free spirit
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2" >
                                Wait, are you breaking up with me?
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2" >
                                I'm only doing it for you...
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2" >
                                Go to hell...
                            </Typography>
                        </Card>
                        <Card className={classes.cardself} >
                            <Typography variant="body2">
                                You know what I love the most about you? You know what I love the most about you? You know what I love the most about you?
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2">
                                What?
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2">
                                That you're a strong. independent women...
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2">
                                Awww!! Thanks, love!
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2" >
                                Who doesn't need any man to feel complete...
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2">
                                Hmmmm...Okay
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2">
                                I think me being with you is an insult to your free spirit
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2" >
                                Wait, are you breaking up with me?
                            </Typography>
                        </Card>
                        <Card className={classes.cardself}>
                            <Typography variant="body2" >
                                I'm only doing it for you...
                            </Typography>
                        </Card>
                        <Card className={classes.cardother}>
                            <Typography variant="body2" >
                                Go to hell...
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid container
                        direction="row"
                        className={classes.chatbox}
                        xs={12} sm={10} md={8} lg={8} xl={8}
                    >
                        <Grid item
                            style={{ backgroundColor: "#ffecb3", height: 64, flexGrow: 1 }}
                        >
                            <TextField
                                id="outlined-full-width"
                                placeholder="Type Here!"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                            />
                        </Grid>
                        <Grid className={classes.sendicon}>
                            <IconButton>
                                <SendIcon style={{ fontSize: '35' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default NewChatpage;