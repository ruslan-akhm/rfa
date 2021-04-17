import React from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import {
  Grid,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft: theme.spacing(2),
  },
  bell: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  dividerBefore: {
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.background.main,
      height: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  },
  name: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  navbarButtons: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: theme.palette.solidGray.main,
    minWidth: "fit-content",
    //BASED ON WHERE WE ARE - COLOR BUTTONS ARE DIFFERENT
  },
  navbarContainer: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    minHeight: theme.spacing(8),
    padding: theme.spacing(3),
    width: "100%",
    //marginTop: theme.spacing(5),
    border: "2px solid red",
  },

  brd: {
    border: "1px solid red",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
      className={classes.navbarContainer}
    >
      <Grid item lg={1} className={classes.navbarButtons + " " + classes.brd}>
        <Logo />
      </Grid>
      <Grid item lg={3} className={classes.dividerBefore + " " + classes.brd}>
        <Button color="primary" className={classes.navbarButtons}>
          Explore
        </Button>
        <Button color="primary" className={classes.navbarButtons}>
          My Clients
        </Button>
        <Button color="primary" className={classes.navbarButtons}>
          Blog
        </Button>
      </Grid>
      <Grid item className={classes.bell + " " + classes.brd}>
        <IconButton color="solidGray">
          <NotificationsNoneIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.dividerBefore + " " + classes.brd}>
        <Avatar
          className={classes.avatar}
          alt=""
          src="../../img/person.jpg"
        ></Avatar>
      </Grid>
      <Grid item className={classes.brd}>
        <Typography className={classes.name}>Name Name</Typography>
      </Grid>
      <Grid item className={classes.brd}>
        <IconButton color="solidGray">
          <ExpandMoreIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Navbar;
