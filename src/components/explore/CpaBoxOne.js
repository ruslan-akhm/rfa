import React from "react";

import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
//import Cpa from "./Cpa";
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
  },
  relative: {
    position: "relative",
    bottom: "0",
    right: "25%",
    width: "125%",
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
function CpaBoxOne(props) {
  console.log(props);
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

export default CpaBoxOne;
