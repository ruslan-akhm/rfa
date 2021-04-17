import React from "react";
import Navbar from "../components/explore/Navbar";
import Header from "../components/explore/Header";
import Chart from "../components/explore/Chart";
import Cookies from "../components/explore/Cookies";
import Tags from "../components/explore/Tags";

import { makeStyles, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  page: {
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
    maxWidth: "100%",
    //padding: "0",
    //border: "2px solid black",
    boxSizing: "border-box",
    padding: theme.spacing(4),
    //paddingRight: theme.spacing(5),
  },
  brd: {
    border: "2px solid black",
    //boxSizing: "border-box",
  },
}));

function Explore() {
  const classes = useStyles();
  //#EBEBF9
  //<Box className={classes.page}> </Box>

  return (
    <Grid
      container
      className={classes.page}
      //spacing={2}
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
    >
      <Grid container item lg={12} className={classes.brd}>
        <Navbar />
      </Grid>
      <Grid
        container
        item
        xl={9}
        lg={9}
        md={9}
        className={classes.brd}
        spacing={0}
      >
        <Header />
      </Grid>
      <Grid item lg={3} className={classes.brd}>
        <Chart />
      </Grid>
      <Grid item lg={4} className={classes.brd}>
        <Cookies />
      </Grid>
      <Grid item lg={4} className={classes.brd}>
        <Tags />
      </Grid>
    </Grid>
  );
}

export default Explore;
