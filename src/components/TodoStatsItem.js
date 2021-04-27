import React from "react";

import Grid from "@material-ui/core/Grid";

const TodoStatsItem = ({ title, amount, xs = 12, sm = 3, lg = 3 }) => {
  return (
    <Grid item xs={xs} sm={sm} lg={lg}>
      {title}
      {amount}
    </Grid>
  );
};

export default TodoStatsItem;
