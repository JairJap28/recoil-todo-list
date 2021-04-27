import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() => ({
  root: {
    textAlign: "center"
  },
  paper: {
    padding: 10
  }
}));

const TodoStatsItem = ({ title, amount, xs = 12, sm = 3, lg = 3 }) => {
  const classes = useStyle();
  return (
    <Grid item xs={xs} sm={sm} lg={lg} className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        {title}
        {amount}
      </Paper>
    </Grid>
  );
};

export default TodoStatsItem;
