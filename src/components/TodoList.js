import React from "react";
import { useRecoilValue } from "recoil";
import { sortTodoList } from "../Recoil/Selector";
import Title from "./Title";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from  "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: '68vh',
    overflow: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'calc(68vh - 150px)',
    }
  },
  item: {
    padding: 10
  },
  containerCreator: {
    flexDirection: 'column'
  }
}));

const TodoList = () => {
  const classes = useStyles();
  const todoList = useRecoilValue(sortTodoList);

  return (
    <>
      <Title />
      <Box display="flex" className={classes.containerCreator}>
        <Box>
          <TodoListFilters />
        </Box>
        <Box>
          <TodoItemCreator />
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={9} lg={9} className={classes.item}>
          <List className={classes.list}>
            {todoList.map(todo => (
              <div key={todo.id}>
                <TodoItem item={todo} />
                <Divider />
              </div>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={3} lg={3} className={classes.item}>
          <TodoListStats/>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoList;
