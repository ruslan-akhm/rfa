import React, { useContext } from "react";
import Earning from "./Earning";
import { UserStateContext } from "../../context/Context";

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  confirmButton: {
    padding: theme.spacing(2),
    width: theme.spacing(18),
    borderRadius: "15px",
  },
  highlight: {
    color: `${theme.palette.secondary.main} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`,
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
      borderRadius: "20px",
      width: "fit-content",
      margin: theme.spacing(0.5),
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      fontWeight: "500",
    },
  },
  menuButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  tagsContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "20px",
    minHeight: theme.spacing(8),
    padding: theme.spacing(4),
    width: "100%",
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: theme.palette.solidGray.main,
  },
}));

function TagsBox(props) {
  const classes = useStyles();
  const { profile, taxReturns } = useContext(UserStateContext);

  return (
    <Grid container className={classes.tagsContainer} direction="column">
      <Grid item>
        <Typography>Individual tax return {taxReturns.taxYear}</Typography>
        <Typography className={classes.text} variant="subtitle2">
          <ScheduleIcon className={classes.icons + " " + classes.text} />
          {taxReturns.dateSubmitted}
        </Typography>
      </Grid>
      <Grid item>
        <List className={classes.list}>
          <ListItem className={classes.highlight}>{profile.type}</ListItem>
          <ListItem>{profile.location}</ListItem>
          <ListItem>{profile.employment}</ListItem>
          <ListItem>{profile.citizenship}</ListItem>
          <ListItem>{profile.maritalStatus}</ListItem>
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
