import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  RECOIL_PERSIST_KEY_LIST,
  RECOIL_STATE_KEY_LIST,
  RECOIL_STATE_KEY_FILTER_LIST,
  RECOIL_STATE_KEY_SORT_LIST,
  OPTION_FILTER_ALL,
  OPTION_SORT_DATE
} from "./Constants";

const { persistAtom } = recoilPersist({
  key: RECOIL_PERSIST_KEY_LIST
});

export const todoListState = atom({
  key: RECOIL_STATE_KEY_LIST,
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const todoListFilterState = atom({
  key: RECOIL_STATE_KEY_FILTER_LIST,
  default: OPTION_FILTER_ALL
});

export const todoListSortState = atom({
  key: RECOIL_STATE_KEY_SORT_LIST,
  default: OPTION_SORT_DATE
});
