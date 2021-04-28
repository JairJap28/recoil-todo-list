import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() => ({
  root: {
    textAlign: "center"
  },
  paper: {
    padding: 10,
    borderTop: '5px solid'
  }
}));

const TodoStatsItem = ({ title, amount, color = '#fff', xs = 12, sm = 3, lg = 12 }) => {
  const classes = useStyle();
  return (
    <Grid item xs={xs} sm={sm} lg={lg} className={classes.root}>
      <Paper 
        elevation={3} 
        className={classes.paper}
        style={{
          borderTopColor: color
        }}
        >
        <strong>{title}</strong>
        <br></br>
        {amount}
      </Paper>
    </Grid>
  );
};

export default TodoStatsItem;
