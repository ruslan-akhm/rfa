import React from "react";

import {
  makeStyles,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    width: "100%",
    borderRadius: "15px",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    "&:last-child": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  cookiesContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "20px",
    minHeight: "fit-content",
    boxSizing: "border-box",
    padding: theme.spacing(3),
    width: "100%",
    border: "2px solid red",
  },
  text: {
    color: "gray",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

function CookiesBox(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.cookiesContainer}>
      <Grid item>
        <Typography variant="h6">We use cookies!</Typography>
      </Grid>
      <Grid item className={classes.text}>
        <Typography>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
      </Grid>
      <Grid item>
        <Button className={classes.buttons}>Configure cookies</Button>
        <Button className={classes.buttons}>Confirm</Button>
      </Grid>
      <IconButton className={classes.closeButton}>
        <CancelIcon />
      </IconButton>
    </Grid>
  );
}

export default CookiesBox;
