import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';
import Faker from 'faker';


const styles1 = {
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
      },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

var styles = {
    paddingTop: 16,
    paddingLeft: 75
};

var stylesName = {
    paddingLeft: 21
};

class HomeContent extends React.Component {
    
    render() {
        const { classes } = this.props;

        return(
            <div style={styles}>
                <Typography style={stylesName} color="textPrimary" variant="h6" noWrap>
                    Welcome, Arshad Muthalif!
                </Typography>
                <br />
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Grid container spacing={2}>
                            <Grid item sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Chat"
                                            height="140"
                                            image={Faker.image.animals()}
                                            title="Chat"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Chat
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Settings"
                                            height="140"
                                            image={Faker.image.technics()}
                                            title="Settings"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Settings
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Currently online users"
                                            height="140"
                                            image={Faker.image.abstract()}
                                            title="Currently online users"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Currently online users
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Feeling graph"
                                            height="140"
                                            image={Faker.image.business()}
                                            title="Feeling graph"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Feeling graph
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Today's status"
                                            height="140"
                                            image={Faker.image.food()}
                                            title="Today's status"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Today's status
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}
export default withStyles(styles1)(HomeContent);