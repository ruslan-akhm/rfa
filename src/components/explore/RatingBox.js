import React from "react";
import Person from "./Person";

import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
//import { DataGrid } from "@material-ui/data-grid";
import CancelIcon from "@material-ui/icons/Cancel";
import StarIcon from "@material-ui/icons/Star";
//import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  proposeButton: {
    width: "100%",
    borderRadius: "15px",
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  ratingContainer: {
    position: "relative",
    minHeight: theme.spacing(10),
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: "20px",
    border: "2px solid red",
    marginTop: "40px",
  },
  star: {
    fill: "#FFB800",
  },
  stats: {
    "&::before": {
      content: '""',
      width: "100%",
      height: "2px",
      backgroundColor: theme.palette.background.main,
      margin: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  text: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.palette.solidGray.main,
  },
}));

//RELATIVE ONLY FOR TOP RIGHT COMPONENT
function RatingBox(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      direction="column"
      className={classes.ratingContainer}
    >
      <Person />
      <Grid
        item
        container
        direction="row"
        justify="space-between"
        className={classes.stats}
      >
        <Grid item>
          <Typography>Rating</Typography>
          <Typography className={classes.text}>
            <StarIcon className={classes.star} />
            XX
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Certificates</Typography>
          <Typography className={classes.text}>XX</Typography>
        </Grid>
        <Grid item>
          <Typography>Projects done</Typography>
          <Typography className={classes.text}>XX</Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.proposeButton}
      >
        Propose a project
      </Button>
      <IconButton className={classes.closeButton}>
        <CancelIcon />
      </IconButton>
    </Grid>
  );
}

export default RatingBox;
