import React, { useContext } from "react";
import { UserStateContext } from "../../context/Context";

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
    fontSize: "16px",
  },
  arrowIcon: {
    fill: theme.palette.green.main,
    marginLeft: theme.spacing(1),
  },
  dollarIcon: {
    color: `${theme.palette.solidGray.main} !important`,
    backgroundColor: theme.palette.background.main,
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
  periodWrapper: {
    marginRight: "auto",
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
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
  },
}));

function TransactionsBox(props) {
  const classes = useStyles();
  const { taxReturns } = useContext(UserStateContext);

  const list = taxReturns.transactions.map(item => {
    return (
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        direction="row"
        className={classes.dividerBefore}
        key={item.id}
      >
        <Grid item>
          <Typography className={classes.initialsCircle}>
            {item.name}
          </Typography>
        </Grid>
        <Grid item className={classes.periodWrapper}>
          <Typography>
            Individual tax return{" "}
            {item.periodFrom == item.periodTo
              ? item.periodFrom
              : item.periodFrom + " - " + item.periodTo}
          </Typography>
          <Typography variant="subtitle2" className={classes.textSub}>
            {item.date}
          </Typography>
        </Grid>
        <Grid item className={classes.amount}>
          <Typography>
            ${item.amount.match(/[^.]*/)}
            <span className={classes.amountCents}>
              .{item.amount.match(/[^.]+$/)}
            </span>
          </Typography>
        </Grid>
      </Grid>
    );
  });

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
      {list}
      {/* HERE WE WILL MAP  */}
      {/* <Grid
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
          <Typography variant="subtitle2" className={classes.textSub}>
            DATE
          </Typography>
        </Grid>
        <Grid item className={classes.amount}>
          <Typography>
            $$$<span className={classes.amountCents}>.00</span>
          </Typography>
        </Grid>
      </Grid> */}
    </Grid>
  );
}

export default TransactionsBox;
