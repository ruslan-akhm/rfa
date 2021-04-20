import React, { useContext } from "react";
import Loading from "../components/explore/Loading";
import { UserStateContext } from "../context/Context";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  page: {
    backgroundColor: theme.palette.background.main,
    minHeight: "75vh",
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
      alignItems="center"
      justify="center"
    >
      {isAuthenticated ? (
        <Typography variant="h4">Blog Page</Typography>
      ) : (
        <Loading />
      )}
    </Grid>
  );
}

export default Blog;
