import React from 'react';

//from material-ui start
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//from material-ui end

const useStyles = makeStyles({
    //from material-card start
    root: {
        width: 300,
        height: 300,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "5px",
        marginTop: "5px",
    },
    media: {
        height: 200,    //height of option text from top
    },
    //from material-card end
});

function DashboardCards(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}  elevation={5}> 
            <CardActionArea>
                <CardMedia className={classes.media}>
                    <i
                        class="material-icons"
                        style={{
                            fontSize: "300px",
                            marginLeft:"auto",
                            marginRight: "auto",
                            color: "#bdbdbd"
                        }}
                    >
                        {props.iconName}
                    </i>
                </CardMedia>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DashboardCards;