import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Faker from 'faker';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    outerBox: {
        margin: 'auto',
        padding: '5vh'
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    textBox: {
        width: 600,
        margin: '1vh'
    }
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.outerBox}>
                <Avatar style={{ margin: 'auto auto 5vh auto' }} alt="Profile-Picture" src={Faker.image.avatar()} className={classes.large} />
                <div className={classes.innerBox}>
                    <TextField
                        disabled
                        id="profile-name"
                        label="Name"
                        value={Faker.name.firstName() + " " + Faker.name.lastName()}
                        variant="outlined"
                        className={classes.textBox}
                        fullWidth
                    />
                    <TextField
                        disabled
                        id="email-id"
                        label="Email"
                        value={Faker.internet.email()}
                        variant="outlined"
                        className={classes.textBox}
                    />
                    <TextField
                        disabled
                        id="address"
                        label="Address"
                        value={Faker.address.city() + ", " + Faker.address.state() + ", " + Faker.address.country()}
                        variant="outlined"
                        className={classes.textBox}
                    />
                    <TextField
                        disabled
                        id="mobile"
                        label="Phone"
                        value={Faker.phone.phoneNumber()}
                        variant="outlined"
                        className={classes.textBox}
                    />

                    <Fab color="primary" variant="extended" className={classes.textBox} style={{ outline: "none" }}>
                        Sign out
                    </Fab>
                </div>
            </div>
        </div>
    );
}