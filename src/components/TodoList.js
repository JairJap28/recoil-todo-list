import React from "react";
import { useRecoilValue } from "recoil";
import { sortTodoList } from "../Recoil/Selector";
import Title from "./Title";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const TodoList = () => {
  const todoList = useRecoilValue(sortTodoList);

  return (
    <>
      <Title />
      {/* <TodoListStats /> */}
      <TodoListFilters />
      <TodoItemCreator />
      <List>
        {todoList.map(todo => (
          <div key={todo.id}>
            <TodoItem item={todo} />
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
};

export default TodoList;
