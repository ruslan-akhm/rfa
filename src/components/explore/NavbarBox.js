import React, { useEffect, useState, useReducer, useContext } from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { UserStateContext, UserDispatchContext } from "../../context/Context";
import { login } from "../../actions/auth";

import {
  makeStyles,
  Grid,
  Button,
  Avatar,
  Typography,
  IconButton,
  Badge,
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
  badge: {
    position: "absolute",
    top: "12px",
    right: "16px",
    border: `6px solid #fff`,
    borderRadius: "50%",
  },
  bell: {
    position: "relative",
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
  loginButton: {
    marginLeft: "auto",
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
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
  },
  navbarWrapper: {
    backgroundColor: theme.palette.background.main,
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: theme.spacing(5),
    height: "20vh",
  },
}));

function NavbarBox(props) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState();
  const location = useLocation();

  const dispatch = useContext(UserDispatchContext);
  const { isAuthenticated, profile, notifications } = useContext(
    UserStateContext
  );

  console.log(notifications);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      return setCurrentPage("explore");
    }
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
        <Grid item lg={1} className={classes.navbarButtons}>
          <Logo />
        </Grid>
        <Grid item lg={3} className={classes.dividerBefore}>
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
        {!isAuthenticated ? (
          <Grid item className={classes.loginButton}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                login(dispatch);
              }}
            >
              Login
            </Button>
          </Grid>
        ) : (
          <>
            <Grid item className={classes.bell}>
              <IconButton>
                {notifications && notifications.new.length > 0 ? (
                  <Badge
                    color="primary"
                    variant="dot"
                    className={classes.badge}
                  ></Badge>
                ) : null}
                <NotificationsNoneIcon />
              </IconButton>
            </Grid>
            <Grid item className={classes.dividerBefore}>
              <Avatar
                className={classes.avatar}
                alt=""
                src={(profile && profile.avatar) || null}
              ></Avatar>
            </Grid>
            <Grid item>
              <Typography className={classes.name}>
                {profile && profile.firstName + " " + profile.lastName}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default NavbarBox;
