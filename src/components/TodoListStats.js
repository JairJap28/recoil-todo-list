import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Recoil/Selector";
import TodoStatsItem from './TodoStatsItem';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    position: 'absolute'
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
    <Grid container className={classes.root}>
      <TodoStatsItem title="Total items:" amount={totalNum} xs={12} sm={12}/>
      <TodoStatsItem title="Items completed:" amount={totalCompletedNum}/>
      <TodoStatsItem title="Items not completed:" amount={totalUnCompletedNum}/>
      <TodoStatsItem title="Percent completed:" amount={formattedPercentCompleted} xs={12} sm={12}/>
    </Grid>
  );
};

export default TodoListStats;
