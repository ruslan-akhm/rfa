import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  amount: {
    marginLeft: "auto",
  },
  amountCents: {
    color: theme.palette.solidGray.main,
    fontSize: "18px",
  },
  arrowIcon: {
    fill: theme.palette.green.main,
    marginLeft: theme.spacing(1),
  },
  dollarIcon: {
    color: `${theme.palette.solidGray.main} !important`,
    backgroundColor: theme.palette.background.main,
    //width: theme.spacing(3),
    //height: theme.spacing(2),
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: "50%",
  },
  dividerBefore: {
    "&::before": {
      content: '""',
      width: "100%",
      height: "2px",
      backgroundColor: theme.palette.background.main,
      margin: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  initialsCircle: {
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 500,
    borderRadius: "50%",
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(3),
  },
  percentage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.green.main,
  },
  textSub: {
    color: theme.palette.solidGray.main,
  },
  transContainer: {
    position: "relative",
    minHeight: theme.spacing(10),
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: "20px",
    border: "2px solid red",
  },
}));

//RELATIVE ONLY FOR TOP RIGHT COMPONENT
function TransactionsBox(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      direction="column"
      className={classes.transContainer}
    >
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Typography>Latest Transactions</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.percentage}>
            <span className={classes.dollarIcon}>$</span>+8,6%
            <TrendingUpIcon className={classes.arrowIcon} />
          </Typography>
        </Grid>
      </Grid>
      {/* HERE WE WILL MAP  */}
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        direction="row"
        className={classes.dividerBefore}
      >
        <Grid item>
          <Typography className={classes.initialsCircle}>XX</Typography>
        </Grid>
        <Grid item>
          <Typography>Individual tax return YEAR</Typography>
          <Typography variant="subtitle" className={classes.textSub}>
            DATE
          </Typography>
        </Grid>
        <Grid item className={classes.amount}>
          <Typography>
            $$$<span className={classes.amountCents}>.00</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TransactionsBox;
