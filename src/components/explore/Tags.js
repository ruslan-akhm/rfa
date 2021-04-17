import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  tagsContainer: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    minHeight: theme.spacing(8),
    padding: theme.spacing(3),
    width: "100%",
    marginTop: "-200px",
    marginLeft: "50px",
    border: "2px solid red",
  },
}));

function Tags(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.tagsContainer}>
      <Grid item>TAGS</Grid>
    </Grid>
  );
}

export default Tags;
