import React from "react";

import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "100%",
    minHeight: theme.spacing(38),
    padding: theme.spacing(4),
    border: "2px solid red",
  },
}));

function ChartBox() {
  const classes = useStyles();
  return (
    <Grid container className={classes.chartContainer}>
      <Grid item> iteem</Grid>
    </Grid>
  );
}

export default ChartBox;
