import React from 'react';

//from material-ui start
import { Grid, TextField, Typography, Card } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
//from material-ui end

const useStyles = makeStyles(theme => ({
    chatbox: {
        margin: 'auto',
    },
    cardself: {
        maxWidth: 450,
        fontSize: 28,
        padding: theme.spacing(1),
        margin: '5px 5px 5px auto',
    },
    cardother: {
        maxWidth: 450,
        fontSize: 28,
        padding: theme.spacing(1),
        margin: '5px auto 5px 5px',
        backgroundColor: '#ffe082',
    },
    mainContainer: {
        padding: 10,
        justifyContent: "flex-end",
        backgroundColor: "beige",
        display: "flex",
        flexDirection: "column",
    },
}));

function ChatMessages(props) {
    const classes = useStyles();

    return (
        <Grid item
            style={{ backgroundColor: "#fff8e1" }}
            xs={12} sm={10} md={8} lg={8} xl={8}
            className={classes.chatbox}
        >
            <div className={classes.mainContainer}>
                <Card className={classes.cardself} >
                    <Typography variant="body2">
                        You know what I love the most about you?
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
            </div>
        </Grid>
    );
}

export default ChatMessages;