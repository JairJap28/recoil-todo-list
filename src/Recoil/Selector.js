import { selector } from "recoil";
import {
  todoListState,
  todoListFilterState,
  todoListSortState
} from "./States";
import {
  RECOIL_SELECTOR_KEY_FILTERED_TODO,
  RECOIL_SELECTOR_KEY_STAST,
  RECOIL_SELECT_KEY_SORT_TODO,
  OPTION_FILTER_COMPLETED,
  OPTION_FILTER_UNCOMPLETED,
  OPTION_SORT_DATE,
  OPTION_SORT_AZ,
  OPTION_SORT_ZA,
  OPTION_SORT_COMPLETED,
  OPTION_SORT_UNCOMPLETED
} from "./Constants";

export const filteredTodoListState = selector({
  key: RECOIL_SELECTOR_KEY_FILTERED_TODO,
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case OPTION_FILTER_COMPLETED:
        return list.filter(todo => todo.isComplete);
      case OPTION_FILTER_UNCOMPLETED:
        return list.filter(todo => !todo.isComplete);
      default:
        return list;
    }
  }
});

export const todoListStatsState = selector({
  key: RECOIL_SELECTOR_KEY_STAST,
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(todo => todo.isComplete).length;
    const totalUnCompletedNum = todoList.filter(todo => !todo.isComplete)
      .length;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
      percentCompleted
    };
  }
});

export const sortTodoList = selector({
  key: RECOIL_SELECT_KEY_SORT_TODO,
  get: ({ get }) => {
    const listFiltered = get(filteredTodoListState);
    const sort = get(todoListSortState);

    switch (sort) {
      case OPTION_SORT_DATE:
        return [...listFiltered].sort((a, b) => a.Date > b.Date);
      case OPTION_SORT_AZ:
        return [...listFiltered].sort((a, b) => a.text.localeCompare(b.text));
      case OPTION_SORT_ZA:
        return [...listFiltered].sort((a, b) => b.text.localeCompare(a.text));
      case OPTION_SORT_COMPLETED:
        return [...listFiltered].sort((a, b) => b.isComplete - a.isComplete);
      case OPTION_SORT_UNCOMPLETED:
        return [...listFiltered].sort((a, b) => a.isComplete - b.isComplete);
      default:
        return listFiltered;
    }
  }
});
