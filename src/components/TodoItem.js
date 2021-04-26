import React from "react";
import moment from "moment";
import { useRecoilState } from "recoil";
import { todoListState } from "../Recoil/States";
import {
  replaceItemAtIndex,
  removeItemAtIndex,
  handleKeyEnter
} from "../utils/ItemOperations";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  textField: {
    width: "calc(100% - 110px)"
  },
  completed: {
    textDecoration: "line-through"
  }
}));

const TodoItem = ({ item }) => {
  const classes = useStyles();

  const [isModifing, setModifing] = React.useState(false);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
      isComplete: false,
      date: new Date()
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
          tabIndex={-1}
          disableRipple
          disabled={isModifing}
          inputProps={{ "aria-labelledby": item.id }}
        />
      </ListItemIcon>
      {isModifing ? (
        <TextField
          label="Todo"
          id="margin-none"
          className={classes.textField}
          defaultValue={item.text}
          onChange={editItemText}
          onKeyDown={e => handleKeyEnter(e) && setModifing(false)}
          helperText="You are going to modify the todo"
        />
      ) : (
        <ListItemText
          id={item.id}
          primary={item.text}
          secondary={moment(item.date).fromNow()}
          className={`${item.isComplete && classes.completed}`}
        />
      )}
      <ListItemSecondaryAction>
        {isModifing ? (
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => setModifing(false)}
          >
            <SaveIcon style={{ color: green[700] }} />
          </IconButton>
        ) : (
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => setModifing(true)}
          >
            <EditIcon />
          </IconButton>
        )}
        <IconButton edge="end" aria-label="delete" onClick={deleteItem}>
          <DeleteSweepIcon color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
