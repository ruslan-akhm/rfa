import React from "react";

import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  closeButton: {
    width: "20px",
    height: "20px",
  },
  cpaContainer: {
    minHeight: theme.spacing(10),
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
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
    width: theme.spacing(8),
    borderRadius: "25px",
    textAlign: "center",
  },
}));

function CpaBoxOne() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={
        classes.cpaContainer + " " + (isMobile ? null : classes.relative)
      }
    >
      <Grid item className={classes.text}>
        <Typography>CPA</Typography>
      </Grid>
      <Typography>Certified Public Accountant</Typography>
      <IconButton className={classes.closeButton}>
        <CancelIcon />
      </IconButton>
    </Grid>
  );
}

export default CpaBoxOne;
