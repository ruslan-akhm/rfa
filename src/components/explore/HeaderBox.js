import React, { useContext } from "react";
import Earning from "./Earning";
import Person from "./Person";
import { UserStateContext } from "../../context/Context";

import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  addCircle: {
    color: theme.palette.green.main,
  },
  buttons: {
    borderRadius: "15px",
    padding: theme.spacing(2),
    width: "120px",
    marginLeft: "auto",
  },
  dividerBefore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "20%",
      left: "-2px",
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.secondary.main,
      height: "60%",
    },
  },
  earning: {
    width: "fit-content",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "100%",
    minHeight: theme.spacing(8),
    padding: theme.spacing(3),
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  margin: {
    marginRight: theme.spacing(5),
  },
  sliderBefore: {
    paddingLeft: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "25%",
      left: "-5px",
      content: '"|||"',
      fontSize: "20px",
      display: "block",
      color: theme.palette.background.main,
      height: "50%",
    },
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: theme.palette.solidGray.main,
  },
}));

function HeaderBox() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { taxReturns } = useContext(UserStateContext);

  return (
    <Grid
      container
      className={
        classes.headerContainer + " " + (isMobile ? null : classes.margin)
      }
      justify="space-between"
      direction="row"
    >
      <Grid item lg={4} md={4} className={classes.sliderBefore}>
        <Typography>Individual tax return {taxReturns.taxYear}</Typography>
        <Typography variant="subtitle2" className={classes.text}>
          <ScheduleIcon className={classes.icons + " " + classes.text} />
          {taxReturns.dateSubmitted}
        </Typography>
      </Grid>

      <Grid item lg={3} md={3} className={classes.dividerBefore}>
        <Person />
      </Grid>

      <Grid
        item
        container
        lg={3}
        md={3}
        direction="row"
        justify="space-between"
        className={classes.dividerBefore}
      >
        <Grid item className={classes.earning}>
          <Earning />
        </Grid>
        <Grid item>
          <IconButton>
            <AddCircleIcon className={classes.addCircle} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item lg={2} md={2} className={classes.dividerBefore}>
        <Button variant="contained" color="primary" className={classes.buttons}>
          Contact
        </Button>
      </Grid>
    </Grid>
  );
}

export default HeaderBox;
