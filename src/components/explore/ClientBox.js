import React from "react";

import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Earning from "./Earning";
//import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: "15px",
  },
  clientContainer: {
    minHeight: theme.spacing(8),
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: "20px",
    border: "2px solid red",
    //marginTop: "40px",
  },
  dividerBefore: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: "60px",
    "&::before": {
      position: "absolute",
      top: "15px",
      left: "-40px",
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.background.main,
      height: theme.spacing(4),
      marginRight: theme.spacing(3),
    },
  },
  offerButton: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
  },
  passButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    marginRight: theme.spacing(4),
  },
  text: {
    marginRight: "auto",
  },
}));
//RELATIVE ONLY FOR TOP RIGHT COMPONENT
function ClientBox(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.clientContainer}
    >
      <IconButton className={classes.backButton}>
        <ArrowBackIcon />
      </IconButton>

      <Grid item className={classes.text}>
        <Typography>Individual Tax Return YEAR</Typography>
        <Typography variant="subtitle2">Potential Client</Typography>
      </Grid>
      <Grid
        item
        className={classes.dividerBefore}
        style={{ border: "2px solid black" }}
      >
        <Earning />
      </Grid>
      <IconButton>
        <AddCircleIcon />
      </IconButton>
      <Grid
        item
        className={classes.dividerBefore}
        style={{ border: "2px solid black" }}
      >
        <Button
          variant="contained"
          className={classes.buttons + " " + classes.passButton}
        >
          Pass
        </Button>
        <Button
          variant="contained"
          className={classes.buttons + " " + classes.offerButton}
        >
          Send offer
        </Button>
      </Grid>
    </Grid>
  );
}

export default ClientBox;
