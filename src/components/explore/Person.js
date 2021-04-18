import React from "react";

import { makeStyles, Typography, Avatar, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  text: {
    // backgroundColor: theme.palette.primary.main,
    // color: "#fff",
    // padding: theme.spacing(1),
    // width: theme.spacing(9),
    // borderRadius: "25px",
    textAlign: "center",
  },
}));

function Person(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item>
        <Avatar
          className={classes.avatar}
          alt=""
          src="../../img/person.jpg"
        ></Avatar>
      </Grid>
      <Grid item>
        <Typography>Name Name</Typography>
        <Typography variant="subtitle2" className={classes.text}>
          <LocationOnIcon className={classes.icons + " " + classes.text} />
          LOCATION
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Person;
