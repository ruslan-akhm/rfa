import React from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core";

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
    minHeight: theme.spacing(8),
    padding: theme.spacing(3),
    width: "100%",
    marginTop: theme.spacing(-15), //"-150px",
    border: "2px solid red",
  },
  text: {
    color: "gray",
  },
}));

function Cookies(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      spacing={3}
      className={classes.cookiesContainer}
    >
      <Grid item>
        <Typography variant="h6">We use cookies!</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.text}>
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

export default Cookies;
