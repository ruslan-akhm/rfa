import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link, useLocation } from "react-router-dom";

import {
  makeStyles,
  Grid,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft: theme.spacing(2),
  },
  activeButton: {
    color: theme.palette.primary.main + " !important",
  },
  bell: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  dividerBefore: {
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      width: "2px",
      display: "block",
      backgroundColor: theme.palette.background.main,
      height: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  },
  links: {
    textDecoration: "none",
  },
  name: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  navbarButtons: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: theme.palette.solidGray.main,
    minWidth: "fit-content",
  },
  navbarContainer: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    minHeight: theme.spacing(8),
    padding: theme.spacing(3),
    width: "100%",
    border: "2px solid red",
  },
  navbarWrapper: {
    backgroundColor: theme.palette.background.main,
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: theme.spacing(5),
  },
  brd: {
    border: "1px solid red",
  },
}));

function NavbarBox(props) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const page = path.match(/[^/]+$/gi);
    setCurrentPage(page[0]);
  }, [location]);

  return (
    <Grid container className={classes.navbarWrapper}>
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.navbarContainer}
      >
        <Grid item lg={1} className={classes.navbarButtons + " " + classes.brd}>
          <Logo />
        </Grid>
        <Grid item lg={3} className={classes.dividerBefore + " " + classes.brd}>
          <Link to="/explore" className={classes.links}>
            <Button
              className={
                classes.navbarButtons +
                " " +
                (currentPage === "explore" ? classes.activeButton : null)
              }
            >
              Explore
            </Button>
          </Link>
          <Link to="/clients" className={classes.links}>
            <Button
              className={
                classes.navbarButtons +
                " " +
                (currentPage === "clients" ? classes.activeButton : null)
              }
            >
              My Clients
            </Button>
          </Link>
          <Link to="/blog" className={classes.links}>
            <Button
              className={
                classes.navbarButtons +
                " " +
                (currentPage === "blog" ? classes.activeButton : null)
              }
            >
              Blog
            </Button>
          </Link>
        </Grid>
        <Grid item className={classes.bell + " " + classes.brd}>
          <IconButton color="solidGray">
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.dividerBefore + " " + classes.brd}>
          <Avatar
            className={classes.avatar}
            alt=""
            src="../../img/person.jpg"
          ></Avatar>
        </Grid>
        <Grid item className={classes.brd}>
          <Typography className={classes.name}>Name Name</Typography>
        </Grid>
        <Grid item className={classes.brd}>
          <IconButton color="solidGray">
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavbarBox;
