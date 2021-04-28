import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Recoil/Selector";
import TodoStatsItem from "./TodoStatsItem";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      position: "absolute",
      margin: '10px 10px',
      width: 'calc(100% - 30px)'
    }
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
    <Grid item container className={classes.root} spacing={1}>
      <TodoStatsItem 
        title="Total items:" 
        amount={totalNum} 
        color='#f6ff00'
        xs={6} sm={12} />
      <TodoStatsItem
        title="Percent completed:"
        amount={formattedPercentCompleted}
        color='#99c0ff'
        xs={6}
        sm={12}
      />
      <TodoStatsItem
        title="Items completed:"
        amount={totalCompletedNum}
        color='#ff0019'
        xs={6}
        sm={12}
      />
      <TodoStatsItem
        title="Items not completed:"
        amount={totalUnCompletedNum}
        color='#00ff3c'
        xs={6}
        sm={12}
      />
    </Grid>
  );
};

export default TodoListStats;
