import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Form from 'react-bootstrap/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 650,
        maxWidth: 960,
        margin: 'auto'
    },
    cardother: {
        fontSize: 14,
        padding: theme.spacing(1),
        margin: '5px auto 5px 5px',
        backgroundColor: '#ffb74d'
    },
    cardself: {
        maxWidth: 450,
        fontSize: 14,
        padding: theme.spacing(1),
        margin: '5px 5px 5px auto'
    },
    mainContainer: {
        padding: 10,
        justifyContent: "flex-end",
        backgroundColor: "beige",
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    }
}));

export default function ChatContent() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Paper variant="outlined" >
                <div className={classes.mainContainer}>
                    <Card className={classes.cardother} >
                        <Typography variant="body2">
                            You know what I love the most about you?
                        </Typography>
                    </Card>
                    <Card className={classes.cardself}>
                        <Typography variant="body2">
                            What?
                        </Typography>
                    </Card>
                    <Card className={classes.cardother}>
                        <Typography variant="body2">
                            That you're a strong. independent women... 
                        </Typography>
                    </Card>
                    <Card className={classes.cardself}>
                        <Typography variant="body2">
                            Awww!! Thanks, love!
                        </Typography>
                    </Card>
                    <Card className={classes.cardother}>
                        <Typography variant="body2" >
                            Who doesn't need any man to feel complete...   
                        </Typography>
                    </Card>
                    <Card className={classes.cardself}>
                        <Typography variant="body2">
                            Hmmmm...Okay
                        </Typography>
                    </Card>
                    <Card className={classes.cardother}>
                        <Typography variant="body2">
                            I think me being with you is an insult to your free spirit  
                        </Typography>
                    </Card>
                    <Card className={classes.cardself}>
                        <Typography variant="body2" >
                            Wait, are you breaking up with me?
                        </Typography>
                    </Card>
                    <Card className={classes.cardother}>
                        <Typography variant="body2" >
                            I'm only doing it for you... 
                        </Typography>
                    </Card>
                    <Card className={classes.cardself}>
                        <Typography variant="body2" >
                            Go to hell...
                        </Typography>
                    </Card>
                    <form style={{width: "100%" }}>
                        <TextField style={{padding: 5}} id="outlined-basic" variant="filled" fullWidth />
                    </form>
                </div>
            </Paper>
        </div>
    );
}
