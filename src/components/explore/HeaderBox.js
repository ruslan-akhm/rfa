import React from "react";
import Earning from "./Earning";
import Person from "./Person";

import {
  makeStyles,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleIcon from "@material-ui/icons/AddCircle";
//import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  addCircle: {
    color: theme.palette.green.main,
    //marginLeft: theme.spacing(1),
  },
  buttons: {
    borderRadius: "15px",
    padding: theme.spacing(2),
    width: "120px",
  },
  headerContainer: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "100%",
    minHeight: theme.spacing(8),
    padding: theme.spacing(4),
    border: "2px solid red",
    //marginBottom: theme.spacing(8),
    marginRight: theme.spacing(5),
  },
  sliderBefore: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "20px",
      left: "-10px",
      content: '"|||"',
      fontSize: "20px",
      //width: "12px",
      display: "block",
      color: theme.palette.background.main,
      height: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  },
  dividerBefore: {
    display: "flex",
    //width: "fit-content",
    justifyContent: "center",
    flexDirection: "column",
    //alignItems: "flex-start",
    //marginLeft: theme.spacing(3),
    //paddingLeft: theme.spacing(6),
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "20px",
      left: "-20px",
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.secondary.main,
      height: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  },
  brd: {
    border: "1px solid black",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // text: {
  //   //padding: "0",
  //   //lineHeight: "18px",
  //   display: "flex",
  //   //flexDirection: "center",
  //   alignItems: "center",
  //   fontSize: "14px",
  // },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

function HeaderBox() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.headerContainer}
      justify="space-between"
      direction="row"
    >
      <Grid item className={classes.sliderBefore + " " + classes.brd}>
        <Typography>Individual tax return YEAR</Typography>
        <Typography variant="subtitle2" className={classes.text}>
          <ScheduleIcon className={classes.icons + " " + classes.text} />
          DATE
        </Typography>
      </Grid>

      <Grid item className={classes.dividerBefore + " " + classes.brd}>
        {/* <Avatar
          className={classes.avatar}
          alt=""
          src="../../img/person.jpg"
        ></Avatar>
      </Grid>
      <Grid item className={classes.brd}>
        <Typography>Name Name</Typography>
        <Typography variant="subtitle2" className={classes.text}>
          <LocationOnIcon className={classes.icons + " " + classes.text} />
          LOCATION
        </Typography> */}
        <Person />
      </Grid>

      <Grid item className={classes.dividerBefore + " " + classes.brd}>
        <Earning />
      </Grid>
      <Grid item className={classes.flexCenter + " " + classes.brd}>
        <IconButton className={classes.brd}>
          <AddCircleIcon className={classes.addCircle} />
        </IconButton>
      </Grid>
      <Grid item className={classes.dividerBefore + " " + classes.brd}>
        <Button variant="contained" color="primary" className={classes.buttons}>
          Contact
        </Button>
      </Grid>
    </Grid>
  );
}

export default HeaderBox;
