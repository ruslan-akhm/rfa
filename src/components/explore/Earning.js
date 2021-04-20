import React, { useContext } from "react";
import { UserStateContext } from "../../context/Context";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: theme.palette.solidGray.main,
  },
}));

function Earning(props) {
  const classes = useStyles();
  const { taxReturns } = useContext(UserStateContext);
  return (
    <Grid container direction="column" style={{ width: "fit-content" }}>
      <Typography>${taxReturns.potentialEarning}</Typography>
      <Typography className={classes.text} variant="subtitle2">
        Potential Earning
      </Typography>
    </Grid>
  );
}

export default Earning;
