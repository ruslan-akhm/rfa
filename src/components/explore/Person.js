import React from "react";

import { makeStyles, Typography, Avatar, Grid, Badge } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  avatarContainer: {
    position: "relative",
  },
  badge: {
    backgroundColor: theme.palette.green.main,
    position: "absolute",
    top: "-2px",
    right: "11px",
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    border: "2px solid #fff",
    zIndex: "2",
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
}));

function Person(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item className={classes.avatarContainer}>
        {/*isOnline? badge : null  */}
        <Badge variant="dot" className={classes.badge}></Badge>
        <Avatar
          className={classes.avatar}
          alt=""
          src="../../img/person.jpg"
        ></Avatar>
      </Grid>
      <Grid item>
        <Typography>NameName NameNameNNN</Typography>
        <Typography variant="subtitle2" className={classes.text}>
          <LocationOnIcon className={classes.icons + " " + classes.text} />
          LOCATION
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Person;
