import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";

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
    //marginRight: theme.spacing(5),
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

    justifyContent: "center",
    flexDirection: "column",
    marginLeft: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "20px",
      left: "-10px",
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.background.main,
      height: theme.spacing(4),
      marginRight: theme.spacing(3),
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
  text: {
    //padding: "0",
    //lineHeight: "18px",
    display: "flex",
    //flexDirection: "center",
    alignItems: "center",
    fontSize: "14px",
  },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.headerContainer} justify="space-between">
      <Grid item className={classes.sliderBefore}>
        <Typography>Individual tax return YEAR</Typography>
        <Typography className={classes.text}>
          <ScheduleIcon className={classes.icons + " " + classes.text} />
          DATE
        </Typography>
      </Grid>
      <Grid item className={classes.dividerBefore}>
        <Avatar
          className={classes.avatar}
          alt=""
          src="../../img/person.jpg"
        ></Avatar>
      </Grid>
      <Grid item>
        <Typography>Name Name</Typography>
        <Typography className={classes.text}>
          <LocationOnIcon className={classes.icons + " " + classes.text} />
          LOCATION
        </Typography>
      </Grid>
      <Grid item className={classes.dividerBefore + " " + classes.flexColumn}>
        <Typography>AMOUNT</Typography>
        <Typography className={classes.text}>Potential Earning</Typography>
      </Grid>
      <Grid item className={classes.flexCenter}>
        <IconButton className={classes.brd}>
          <AddCircleIcon className={classes.addCircle} />
        </IconButton>
      </Grid>
      <Grid item className={classes.dividerBefore}>
        <Button variant="contained" color="primary" className={classes.buttons}>
          Contact
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
