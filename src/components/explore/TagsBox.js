import React from "react";
import Earning from "./Earning";

import {
  makeStyles,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  IconButton,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  tagsContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "20px",
    minHeight: theme.spacing(8),
    padding: theme.spacing(4),
    width: "100%",
    border: "2px solid red",
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    "&::before, &::after": {
      content: '""',
      width: "100%",
      height: "2px",
      backgroundColor: theme.palette.background.main,
      margin: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    "& li": {
      border: "2px solid red",
      borderRadius: "20px",
      width: "fit-content",
      margin: theme.spacing(0.5),
      // color: active ? "#fff" : theme.palette.primary.main,
      // backgroundColor: active
      //   ? theme.palette.primary.main
      //   : theme.palette.secondary.main,
    },
  },
  menuButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  confirmButton: {
    padding: theme.spacing(2),
    width: theme.spacing(18),
    borderRadius: "15px",
  },
}));

function TagsBox(props) {
  const classes = useStyles();

  //WHEN MAPPING - SHOULD GIVE ref / state - active=true/false -

  return (
    <Grid container className={classes.tagsContainer} direction="column">
      <Grid item>
        <Typography>Individual tax return YEAR</Typography>
        <Typography className={classes.text}>
          <ScheduleIcon className={classes.icons + " " + classes.text} />
          DATE
        </Typography>
      </Grid>
      <Grid item>
        <List className={classes.list}>
          <ListItem>TYPE</ListItem>
          <ListItem>LOCATION</ListItem>
          <ListItem>EMPLOYMENT</ListItem>
          <ListItem>CITIZENSHIP</ListItem>
          <ListItem>MARITALSTATUS</ListItem>
        </List>
      </Grid>
      <Grid container item direction="row" justify="space-between">
        <Earning />
        <Button
          color="primary"
          variant="contained"
          className={classes.confirmButton}
        >
          Confirm
        </Button>
      </Grid>
      <IconButton className={classes.menuButton}>
        <MoreVertIcon />
      </IconButton>
    </Grid>
  );
}

export default TagsBox;
