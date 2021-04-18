import React from "react";

import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
//import Cpa from "./Cpa";
//import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  closeButton: {
    opacity: "0.8",
    fill: theme.palette.primary.main,
    borderRadius: "50%",
  },
  closeButtonWrapper: {
    border: "none",
    width: "8px",
    height: "8px",
    backgroundColor: "#fff !important",
  },
  cpaContainer: {
    minHeight: theme.spacing(10),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "20px",
    border: "2px solid red",
    //marginTop: "40px",
  },
  text: {
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    width: theme.spacing(9),
    borderRadius: "25px",
    textAlign: "center",
  },
}));
//RELATIVE ONLY FOR TOP RIGHT COMPONENT
function CpaBoxTwo(props) {
  console.log(props);
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.cpaContainer}
    >
      <Grid item className={classes.text}>
        <Typography>CPA</Typography>
      </Grid>
      <Typography>Certified Public Accountant</Typography>
      <IconButton className={classes.closeButtonWrapper}>
        <CancelIcon className={classes.closeButton} />
      </IconButton>
    </Grid>
  );
}

export default CpaBoxTwo;
