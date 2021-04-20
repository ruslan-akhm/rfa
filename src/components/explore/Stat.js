import React from "react";
import { withStyles, Slider } from "@material-ui/core";
import { theme } from "../../themes/theme";

const StatSlider = withStyles({
  root: {
    color: theme.palette.green.main,
    height: 8,
    pointerEvents: "none",
  },
  thumb: {
    display: "none",
    disabled: true,
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    marginTop: -8,
    marginLeft: -12,
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.palette.lightGray.main,
  },
})(Slider);

function Stat(props) {
  return <StatSlider value={props.val} min={0} max={props.max} />;
}

export default Stat;
