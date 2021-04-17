import React from "react";
import Navbar from "../navbar/Navbar";
import { makeStyles, Box, Grid } from "@material-ui/core";
import Header from "../header/Header";

const useStyles = makeStyles(theme => ({
  page: {
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
    maxWidth: "100%",
    //padding: "0",
    //border: "2px solid transparent",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

function Mainpage() {
  const classes = useStyles();
  //#EBEBF9
  //<Box className={classes.page}> </Box>

  return (
    <Grid
      container
      className={classes.page}
      //spacing={0}
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
    >
      <Grid item lg={12}>
        <Navbar />
      </Grid>
      <Grid item lg={9}>
        <Header />
      </Grid>
      <Grid item lg={3}>
        <Chart />
      </Grid>
    </Grid>
  );
}

export default Mainpage;
