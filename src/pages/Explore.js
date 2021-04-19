import React, { useEffect } from "react";

import HeaderBox from "../components/explore/HeaderBox";
import ChartBox from "../components/explore/ChartBox";
import CookiesBox from "../components/explore/CookiesBox";
import TagsBox from "../components/explore/TagsBox";
import ClientBox from "../components/explore/ClientBox";
import RatingBox from "../components/explore/RatingBox";
import CpaBoxOne from "../components/explore/CpaBoxOne";
import CpaBoxTwo from "../components/explore/CpaBoxTwo";
import TransactionsBox from "../components/explore/TransactionsBox";
import FileUploadBox from "../components/explore/FileUploadBox";

import { makeStyles, Grid, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  page: {
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
    maxWidth: "100%",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  brd: {
    border: "2px solid black",
  },
}));

function Explore(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.page}
      direction="row"
      alignItems="flex-start"
      justify="space-between"
    >
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
        justify={isMobile ? "space-evenly" : "flex-start"}
      >
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          className={classes.brd}
          style={{ marginBottom: "40px" }}
        >
          <HeaderBox />
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          className={classes.brd}
          spacing={0}
          style={isMobile ? { marginRight: "0" } : { marginRight: "60px" }}
        >
          <CookiesBox />
        </Grid>
        <Grid item lg={5} md={5} className={classes.brd}>
          <TagsBox />
        </Grid>
      </Grid>

      <Grid
        container
        item
        xl={3}
        lg={3}
        md={12}
        style={{
          border: "4px solid green",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        <ChartBox />
        <Grid item style={{ position: "relative", width: "100%" }}>
          <CpaBoxOne />
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        md={12}
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
        direction={isMobile ? "column" : "row"}
        justify={isMobile ? "center" : "space-between"}
        alignItems={isMobile ? "center" : "space-between"}
      >
        <Grid
          item
          xl={4}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          style={isMobile ? { marginBottom: "40px" } : { marginBottom: "0" }}
        >
          <CpaBoxTwo />
          <RatingBox />
        </Grid>
        <Grid
          item
          xl={5}
          lg={5}
          md={12}
          style={isMobile ? { marginBottom: "40px" } : { marginBottom: "0" }}
        >
          <TransactionsBox />
        </Grid>
        <Grid item xl={2} lg={2} md={12}>
          <FileUploadBox />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Explore;
