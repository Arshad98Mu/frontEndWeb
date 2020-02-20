import React from 'react';
import NavbarAndDrawer from './commonComponents/NavbarAndDrawer'

//from material-ui start
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import DashboardCards from './commonComponents/DashboardCards';
//from material-ui end
import Faker from 'faker';
import Feelings from './commonComponents/Feeling';
Faker.locale = "en_IND"

const useStyles = makeStyles(theme => ({
    optionscontainer: {
        padding: "5px"
    },
}));

function NewDashboard() {
    const classes = useStyles();

    //options
    const data = [
        {
            name: "Chat",
            iconName: "chat",
            description: "",
        },
        {
            name: "Enter Community",
            iconName: "supervisor_account",
            description: "",
        },
        {
            name: "Discussion",
            iconName: "supervisor_account",
            description: "",
        },
        {
            name: "Settings",
            iconName: "settings_applications",
            description: "",
        },
        {
            name: "Profile",
            iconName: "account_circle",
            description: "",
        },
    ]


    const optionsdata = (classes, optiondata) => {
        //to render options
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <DashboardCards
                    name={optiondata.name}
                    iconName={optiondata.iconName}
                    description={optiondata.description}
                />
            </Grid>
        );
    }

    return (
        <div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item >
                    <NavbarAndDrawer />
                    <div style={{ height: 64 }} />
                    <div>
                        <Grid direction='column' style={{ backgroundColor: "" }}>
                            <Grid>
                                <Feelings />
                            </Grid>
                            <Grid container className={classes.optionscontainer}>
                                {data.map(e => {
                                    return optionsdata(classes, e)
                                })}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default NewDashboard;