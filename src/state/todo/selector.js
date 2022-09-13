import { selector } from 'recoil';
import { limitDataState, todoListState } from './state';

export const TODO_LIST_COUNT = 'todoListData';

export const todoListWithSelectorAmount = selector({
  key: TODO_LIST_COUNT,
  get: ({ get }) => {
    const todoList = get(todoListState);
    const limit = get(limitDataState);
    return todoList.slice(0, parseInt(limit));
  },
});
