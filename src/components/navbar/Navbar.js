import React from "react";
import { Grid, Button } from "@material-ui/core";
//import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
//import { theme } from "../themes/theme";

//const useStyles = makeStyles(theme => ({}));

function Navbar(props) {
  //const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        NAVBAR
        <Button color="primary" variant="contained">
          BTN
        </Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;
