import React, { useEffect, useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import Stat from "./Stat";
import { UserStateContext } from "../../context/Context";

import {
  makeStyles,
  Grid,
  Box,
  Typography,
  useTheme,
  IconButton,
} from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  cardTitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  chartContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "100%",
    minHeight: theme.spacing(38),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(0.5),
    boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
  },
  grayText: {
    color: theme.palette.solidGray.main,
  },
  infoButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  sliders: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  textBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

function ChartBox() {
  const classes = useStyles();
  const theme = useTheme();

  const [gradient, setGradient] = useState();
  const { milestones } = useContext(UserStateContext);

  console.log(milestones);

  const data = {
    labels: milestones.dataPoints,
    datasets: [
      {
        type: "bar",
        label: "",
        data: milestones.dataPoints,
        fill: true,
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,0)",
        tension: 0.5,
        hoverBorderColor: "rgba(255,255,255,0)",
        hoverBorderWidth: 1,
        hoverBackgroundColor: "rgba(255,255,255,0.4)",
      },
      {
        type: "line",
        label: "",
        data: milestones.dataPoints,
        fill: true,
        backgroundColor: gradient && gradient,
        borderColor: theme.palette.primary.main,
        tension: 0.5,
        pointBackgroundColor: theme.palette.primary.main,
        pointBorderColor: "#fff",
        pointBorderWidth: 0,
        hoverBorderColor: "#fff",
        hoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
          },
          //hide the tick marks which cause margin on yAxis + hide grid
          gridLines: {
            tickMarkLength: 0,
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
    tooltips: {
      custom: function (tooltip) {
        if (!tooltip) return;
        // disable displaying the color box in onHover window + centering text
        tooltip.displayColors = false;
        tooltip.xPadding = 12;
      },
      callbacks: {
        //show only label of the corresponding point on hover
        title: function (items, data) {
          return "";
        },
        label: function (item) {
          return "$" + item.value;
        },
      },
    },
  };

  useEffect(() => {
    var ctx = document.getElementById("chart").getContext("2d");
    //Set gradient color for fill below chart line
    let grad = ctx.createLinearGradient(0, 0, 0, 400);
    grad.addColorStop(0, "rgba(0,0,255,0.2)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    setGradient(grad);
  }, []);

  const datasetKeyProvider = () => {
    return btoa(Math.random()).substring(0, 12);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.chartContainer}
    >
      <Grid item className={classes.cardTitle}>
        <Typography>Pros milestones</Typography>
      </Grid>
      <Grid item className={classes.sliders}>
        <Box className={classes.textBox}>
          <Typography className={classes.grayText} variant="subtitle2">
            Projects done
          </Typography>
          <Typography>
            {milestones.projects.completed}
            <span className={classes.grayText}>
              /{milestones.projects.total}
            </span>
          </Typography>
        </Box>
        <Stat
          val={milestones.projects.completed}
          max={milestones.projects.total}
        />
      </Grid>
      <Grid item className={classes.sliders}>
        <Box className={classes.textBox}>
          <Typography className={classes.grayText} variant="subtitle2">
            Rating
          </Typography>
          <Typography>{milestones.rating.current}</Typography>
        </Box>
        <Stat val={milestones.rating.current} max={milestones.rating.max} />
      </Grid>
      <Grid lg={12} md={12} item>
        <Line
          id="chart"
          data={data}
          options={options}
          width={80}
          height={55}
          datasetKeyProvider={datasetKeyProvider}
        />
      </Grid>
      <IconButton className={classes.infoButton}>
        <InfoOutlinedIcon />
      </IconButton>
    </Grid>
  );
}

export default ChartBox;
