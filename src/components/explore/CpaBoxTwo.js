import React from "react";

import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

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
    width: "7px !important",
    height: "7px !important",
    backgroundColor: "#fff !important",
  },
  cpaContainer: {
    minHeight: theme.spacing(10),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "20px",
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
    width: "100%",
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

function CpaBoxTwo() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      //md={12}
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
