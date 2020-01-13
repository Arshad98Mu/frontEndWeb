import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    boxContainer: {
        maxWidth: 700,
        margin: 'auto'
    },
    card: {
        minWidth: 275,
        margin: '1vh auto 1vh auto',

    },
    line1: {
        display: 'flex'
    }
});

const gridList = (classes, textData) => {
    return (<Grid item spacing={6} xs={3}>
        <Card className={classes.card} elevation={8} style={{}}>
            <CardContent>
                <i class="material-icons" style={{ fontSize: "80px" }}>
                    {textData.iconName}
                </i>
            </CardContent>
            <CardActions>
                <Button size="small">{textData.name}</Button>
            </CardActions>
        </Card>
    </Grid>);
}

export default function InitialDashboard() {
    const classes = useStyles();
    //style={{ backgroundColor: "red" }}

    const data = [
        {
            name: "Chat",
            iconName: "chat"
        },
        {
            name: "Enter Community",
            iconName: "supervisor_account"
        },
        {
            name: "Discussion",
            iconName: "supervisor_account"
        },
        {
            name: "Settings",
            iconName: "settings_applications"
        },
        {
            name: "Profile",
            iconName: "account_circle"
        }
    ]

    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={2} >
                <Grid item xs={12} >
                    <Grid container xs={12} justify="flex-end">
                        <Grid item xs={5} >
                            <TextField
                                id="outlined-basic"
                                placeholder="How are you feeling today?"
                                variant="outlined"
                                fullWidth
                                style={{ margin: '1vh auto 1vh auto', backgroundColor: "white" }}
                            />
                        </Grid>
                        <Grid item xs={1} style={{ margin:'auto 1vh auto 2vh' }} >
                            <Button color="primary" >Update</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "10vh" }}>
                    <Grid container spacing={5} xs={12}>
                        {data.map(e => {
                            return gridList(classes, e)
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}