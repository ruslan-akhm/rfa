import React, { useContext } from "react";
import { UserStateContext } from "../context/Context";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  message: {
    border: "2px solid red",
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    backgroundColor: theme.palette.background.main,
    minHeight: "80vh",
    maxWidth: "100%",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

function Blog(props) {
  const classes = useStyles();

  const { isAuthenticated } = useContext(UserStateContext);

  return (
    <Grid
      container
      className={classes.page}
      direction="row"
      alignItems="flex-start"
      justify="space-between"
    >
      <Grid item className={classes.message}>
        <Typography>
          {!isAuthenticated
            ? "Please, login to view the content"
            : "Blog component"}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Blog;
