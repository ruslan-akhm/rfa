import React from "react";

import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
//import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  cpaContainer: {
    minHeight: theme.spacing(10),
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: "20px",
    border: "2px solid red",
    marginTop: "40px",
    // position: "relative",
    // bottom: "0",
    // right: "20%",
    // width: "120%",
  },
  relative: {
    position: "relative",
    bottom: "0",
    right: "20%",
    width: "120%",
  },
  text: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(1),
    width: theme.spacing(9),
    borderRadius: "25px",
    textAlign: "center",
  },
}));
//RELATIVE ONLY FOR TOP RIGHT COMPONENT
function CpaBox(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.cpaContainer + " " + classes.relative}
    >
      <Grid item className={classes.text}>
        <Typography>CPA</Typography>
      </Grid>
      <Typography>Certified Public Accountant</Typography>
      <IconButton>
        <CancelIcon />
      </IconButton>
    </Grid>
  );
}

export default CpaBox;
