import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  text: {
    display: "flex",
    alignItems: "center",
  },
}));

function Earning(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ width: "fit-content" }}>
      <Typography>AMOUNT</Typography>
      <Typography className={classes.text} variant="subtitle2">
        Potential Earning
      </Typography>
    </Grid>
  );
}

export default Earning;
