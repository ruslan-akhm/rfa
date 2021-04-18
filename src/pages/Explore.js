import React from "react";
import NavbarBox from "../components/explore/NavbarBox";
import HeaderBox from "../components/explore/HeaderBox";
import ChartBox from "../components/explore/ChartBox";
import CookiesBox from "../components/explore/CookiesBox";
import TagsBox from "../components/explore/TagsBox";
import ClientBox from "../components/explore/ClientBox";
import RatingBox from "../components/explore/RatingBox";
import CpaBoxOne from "../components/explore/CpaBoxOne";
import CpaBoxTwo from "../components/explore/CpaBoxTwo";

import { makeStyles, Grid } from "@material-ui/core";

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
    padding: theme.spacing(5),
    //paddingRight: theme.spacing(5),
  },
  brd: {
    border: "2px solid black",
    //boxSizing: "border-box",
  },
}));

//NEEDS TO CHECK PIXELS AND WRAP AFTER 75% 1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
      justify="space-between"
    >
      <Grid
        container
        item
        lg={12}
        className={classes.brd}
        style={{ marginBottom: "40px" }}
      >
        <NavbarBox />
      </Grid>

      <Grid
        container
        item
        xl={9}
        lg={9}
        md={12}
        style={{
          border: "4px solid blue",
          boxSizing: "border-box",
          marginBottom: "40px",
        }}
      >
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          className={classes.brd}
          style={{ marginBottom: "40px" }}
          spacing={0}
        >
          <HeaderBox />
        </Grid>
        <Grid
          item
          lg={5}
          className={classes.brd}
          spacing={0}
          style={{ marginRight: "40px" }}
        >
          <CookiesBox />
        </Grid>
        <Grid item lg={5} className={classes.brd}>
          <TagsBox />
        </Grid>
      </Grid>

      <Grid
        container
        item
        xl={3}
        lg={3}
        md={3}
        style={{ border: "4px solid green", position: "relative" }}
      >
        {/* <Grid item lg={12} className={classes.brd}> */}
        <ChartBox />
        {/* </Grid> */}
        <Grid item style={{ position: "relative", width: "100%" }}>
          <CpaBoxOne />
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={12}
        className={classes.brd}
        style={{ marginBottom: "40px" }}
      >
        <ClientBox />
      </Grid>
      <Grid
        container
        item
        xl={12}
        lg={12}
        md={12}
        className={classes.brd}
        style={{ marginBottom: "40px", border: "4px solid orange" }}
        spacing={0}
        direction="row"
      >
        <Grid item xl={4} lg={4} md={4}>
          <CpaBoxTwo />
          <RatingBox />
        </Grid>
        <Grid item xl={5} lg={5} md={5}></Grid>
        <Grid item xl={3} lg={3} md={3}></Grid>
      </Grid>
    </Grid>
  );
}

export default Explore;
