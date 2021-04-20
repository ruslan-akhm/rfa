import React, { useEffect, useContext } from "react";
import { UserStateContext, UserDispatchContext } from "../context/Context";

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

import {
  makeStyles,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  cpaBoxWrap: {
    position: "relative",
    width: "100%",
  },
  marginBottom: {
    marginBottom: "40px",
  },
  marginRight: {
    marginRight: "60px",
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
    paddingTop: "5vh",
  },
}));

function Explore() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();

  const dispatch = useContext(UserDispatchContext);
  const { isAuthenticated, loading } = useContext(UserStateContext);

  console.log(isAuthenticated);

  return (
    <Grid
      container
      className={classes.page}
      direction="row"
      alignItems="flex-start"
      justify="space-between"
    >
      {isAuthenticated ? (
        <>
          <Grid
            container
            item
            xl={9}
            lg={9}
            md={12}
            className={classes.marginBottom}
            justify={isMobile ? "space-evenly" : "flex-start"}
          >
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              className={classes.marginBottom}
            >
              <HeaderBox />
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
              className={isMobile ? null : classes.marginRight}
            >
              <CookiesBox />
            </Grid>
            <Grid item lg={5} md={5}>
              <TagsBox />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xl={3}
            lg={3}
            md={12}
            className={classes.marginBottom}
          >
            <ChartBox />
            <Grid item className={classes.cpaBoxWrap}>
              <CpaBoxOne />
            </Grid>
          </Grid>
          <Grid item container lg={12} md={12} className={classes.marginBottom}>
            <ClientBox />
          </Grid>
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            className={classes.marginBottom}
            direction={isMobile ? "column" : "row"}
            justify={isMobile ? "center" : "space-between"}
            alignItems={isMobile ? "center" : "flex-start"}
          >
            <Grid
              item
              xl={4}
              lg={4}
              md={12}
              sm={12}
              xs={12}
              className={isMobile ? classes.marginBottom : null}
            >
              <CpaBoxTwo />
              <RatingBox />
            </Grid>
            <Grid
              item
              xl={5}
              lg={5}
              md={12}
              className={isMobile ? classes.marginBottom : null}
            >
              <TransactionsBox />
            </Grid>
            <Grid item xl={2} lg={2} md={12}>
              <FileUploadBox />
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid item className={classes.message}>
          <Typography>Please, login to view the content</Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Explore;
