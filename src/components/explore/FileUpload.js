import React from "react";

import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  uploadContainer: {
    position: "relative",
    minHeight: theme.spacing(10),
    padding: theme.spacing(1),
    backgroundColor: "#fff",
    borderRadius: "20px",
    border: "2px solid red",
  },
  innerContainer: {
    borderRadius: "15px",
    border: `2px dashed ${theme.palette.background.main}`,
    padding: theme.spacing(3),
  },
  uploadButton: {
    borderRadius: "25px",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

//RELATIVE ONLY FOR TOP RIGHT COMPONENT
function FileUpload(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      //   justify="center"
      //   alignItems="center"
      //   direction="column"
      className={classes.uploadContainer}
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.innerContainer}
      >
        <Grid item>
          <Typography>Drop document here</Typography>
          <Typography>or upload it manually</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.uploadButton}
          >
            Upload manually &nbsp;
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FileUpload;
