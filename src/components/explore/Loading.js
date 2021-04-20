import React, { useContext } from "react";
import { UserStateContext } from "../../context/Context";

import {
  makeStyles,
  Grid,
  Box,
  Typography,
  CircularProgress,
  Fade,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  loadingContainer: {
    width: "100%",
  },
  message: {
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Loading(props) {
  const classes = useStyles();
  const { loading, welcome, profile } = useContext(UserStateContext);

  return (
    <Box className={classes.loadingContainer}>
      <Grid item className={classes.message}>
        {loading && <CircularProgress color="primary" />}
        {!loading && welcome && (
          <Fade in={welcome}>
            <Typography variant="h4">
              Welcome back, {profile.firstName}!
            </Typography>
          </Fade>
        )}
        {!loading && !welcome && (
          <Typography variant="h4">Please, login to view the content</Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Loading;
