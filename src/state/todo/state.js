import { atom } from 'recoil';

export const TODO_LIST_STATE = 'todoListState';

export const todoListState = atom({
  key: TODO_LIST_STATE,
  default: [],
});
