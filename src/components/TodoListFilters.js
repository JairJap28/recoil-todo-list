import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState, todoListSortState } from "../Recoil/States";

import {
  OPTION_FILTER_ALL,
  OPTION_FILTER_COMPLETED,
  OPTION_FILTER_UNCOMPLETED,
  OPTION_SORT_DATE,
  OPTION_SORT_AZ,
  OPTION_SORT_ZA,
  OPTION_SORT_COMPLETED,
  OPTION_SORT_UNCOMPLETED
} from "../Recoil/Constants";

import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [sort, setSort] = useRecoilState(todoListSortState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const updateSort = ({ target: { value } }) => {
    setSort(value);
  };

  return (
    <Box display="flex" p={1}>
      <Box flexGrow={1}>
        <FormControl>
          <InputLabel id="filter-todo-list">Filter</InputLabel>
          <Select
            labelId="filter-todo-list"
            id="todo-list-select"
            value={filter}
            onChange={updateFilter}
          >
            <MenuItem value={OPTION_FILTER_ALL}>All</MenuItem>
            <MenuItem value={OPTION_FILTER_COMPLETED}>Completed</MenuItem>
            <MenuItem value={OPTION_FILTER_UNCOMPLETED}>Uncompleted</MenuItem>
          </Select>
          <FormHelperText>How do you want to filter?</FormHelperText>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <InputLabel id="sort-todo-list">Sort</InputLabel>
          <Select
            labelId="sort-todo-list"
            id="sort-list-select"
            value={sort}
            onChange={updateSort}
          >
            <MenuItem value={OPTION_SORT_DATE}>Date</MenuItem>
            <MenuItem value={OPTION_SORT_AZ}>From A - Z</MenuItem>
            <MenuItem value={OPTION_SORT_ZA}>From Z - A</MenuItem>
            <MenuItem value={OPTION_SORT_COMPLETED}>Completed First</MenuItem>
            <MenuItem value={OPTION_SORT_UNCOMPLETED}>UnCompleted First</MenuItem>
          </Select>
          <FormHelperText>How do you want to sort?</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default TodoListFilters;
