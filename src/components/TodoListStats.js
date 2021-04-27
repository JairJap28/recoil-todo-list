import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Recoil/Selector";
import TodoStatsItem from "./TodoStatsItem";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    position: "absolute",
    margin: '10px 10px',
    width: 'calc(100% - 30px)'
  }
}));

const TodoListStats = () => {
  const classes = useStyles();

  const {
    totalNum,
    totalCompletedNum,
    totalUnCompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <Grid container className={classes.root} spacing={1}>
      <TodoStatsItem title="Total items:" amount={totalNum} xs={6} sm={6} />
      <TodoStatsItem
        title="Percent completed:"
        amount={formattedPercentCompleted}
        xs={6}
        sm={6}
      />
      <TodoStatsItem
        title="Items completed:"
        amount={totalCompletedNum}
        xs={6}
        sm={6}
      />
      <TodoStatsItem
        title="Items not completed:"
        amount={totalUnCompletedNum}
        xs={6}
        sm={6}
      />
    </Grid>
  );
};

export default TodoListStats;
