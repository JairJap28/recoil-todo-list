import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../Recoil/States";
import { getId } from "../utils/ItemOperations";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    margin: 10,
    display: "flex",
    alignItems: "center",
    width: "95%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const TodoItemCreator = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = event => {
    event.preventDefault();
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        date: new Date(),
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <Divider />
      <Paper component="form" onSubmit={addItem} className={classes.root}>
        <InputBase
          value={inputValue}
          onChange={onChange}
          className={classes.input}
          placeholder="Add a new Item"
          inputProps={{ "aria-label": "add new item" }}
        />
        <Divider orientation="vertical" className={classes.divider} />
        <IconButton type="submit" color="primary" aria-label="search">
          <AddCircleIcon />
        </IconButton>
      </Paper>
      <Divider />
    </>
  );
};

export default TodoItemCreator;
