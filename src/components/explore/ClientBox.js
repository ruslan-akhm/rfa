import React, { useContext } from "react";
import Earning from "./Earning";
import { UserStateContext } from "../../context/Context";

import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
    width: "100%",
  },
  dividerBefore: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&::before": {
      position: "absolute",
      top: "20%",
      left: "0px",
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.background.main,
      height: "60%",
      marginRight: theme.spacing(3),
    },
  },
  green: {
    color: theme.palette.green.main,
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

function ClientBox() {
  const classes = useStyles();
  const { taxReturns } = useContext(UserStateContext);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.clientContainer}
    >
      <IconButton className={classes.backButton}>
        <ArrowBackIcon />
      </IconButton>

      <Grid item className={classes.text}>
        <Typography>Individual Tax Return {taxReturns.taxYear}</Typography>
        <Typography variant="subtitle2" className={classes.green}>
          Potential Client
        </Typography>
      </Grid>
      <Grid item className={classes.dividerBefore}>
        <Earning />
        <IconButton>
          <AddCircleIcon className={classes.green} />
        </IconButton>
      </Grid>
      <Grid item className={classes.dividerBefore}>
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
