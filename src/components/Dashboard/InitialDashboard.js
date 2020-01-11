import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';

const useStyles = makeStyles({
    root: {},
    boxContainer: {
        maxWidth: 700,
        margin: 'auto'
    },
    card: {
        minWidth: 275,
        margin: '1vh auto 1vh auto'
    },
    line1: {
        display: 'flex'
    }
});

export default function InitialDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.boxContainer}>
                <div className={classes.line1}>
                    <TextField
                        id="outlined-basic"
                        placeholder="How are you feeling today?"
                        variant="outlined"
                        fullWidth
                        style={{ margin: '1vh auto 1vh auto' }}
                    />
                    <Button color="primary" style={{ margin: 'auto 1vh auto 1vh'}}>Update</Button>
                </div>
                <div className={classes.line1}>
                    <Card className={classes.card}>
                        <CardContent>
                            <ChatTwoToneIcon style={{ fontSize: 80 }} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Chat</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ForumTwoToneIcon style={{ fontSize: 80 }} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Enter Community</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className={classes.line1}>
                    <Card className={classes.card}>
                        <CardContent>
                            <ForumTwoToneIcon style={{ fontSize: 80 }} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Discussion</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <SettingsTwoToneIcon style={{ fontSize: 80 }} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Settings</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}