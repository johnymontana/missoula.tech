import React, { Component } from "react";
import meetup from './meetup.svg';
import slack from './slack.svg';
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const cards = [
  {
    image: meetup,
    heading: "MissoulaTech Meetup Group",
    description: "Learn more about software development and meet your fellow Missoula tech community members. We aim for roughly monthly in-person meetups.",
    buttons: [
      {
        title: "Join MissoulaTech Meetup Group",
        url: "https://www.meetup.com/MissoulaTech/"
      }
    ]
  },
  {
    image: slack,
    heading: "MissoulaTech Slack Group",
    description: "Chat online about all issues MissoulaTech in the MissoulaTech Slack workspace.",
    buttons: [
      {
        title: "Join MissoulaTech Slack Workspace",
        url: "https://join.slack.com/t/missoulatech/shared_invite/enQtMzk1NTIzOTQxNDczLTI3ZTIwYzBlN2M1YzM1Y2RhYzU1Y2I4YzAxZDc3ZTdhZTAyMDcwNmIxYTk1OTNhMzE5Njc3NGFkYjk2MTJjYzU"
      }
    ]
  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Missoula.Tech
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                variant="display3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Missoula.Tech
              </Typography>
              <Typography
                variant="title"
                align="center"
                color="textSecondary"
                paragraph
              >
                An online community for the Missoula tech community.
              </Typography>
              {/* <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div> */}
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40} justify="center">
              {cards.map(card => (
                <Grid item key={card.heading} xs={12} sm={6} md={6} lg={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image} // eslint-disable-line max-len
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        {card.heading}
                      </Typography>
                      <Typography>
                       {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {card.buttons.map(b => {
                        return (<Button size="small" variant="outlined" color="primary" href={b.url} fullWidth={true}>
                          {b.title}
                        </Button>)
                      })}
                     
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        <footer className={classes.footer}>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="p"
          >
            Missoula Tech is moderated by <a href="https://twitter.com/lyonwj">@lyonwj</a> and <a href="https://goto10line.net/">@glesica</a>. Email lyonwj -at- gmail.com with any questions.
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
