import { atom, selector, useRecoilValue } from 'recoil';

import { todoListState } from './useTodoList';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filterTodoListState = selector({
  key: 'filterTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const useTodoListFilter = () => {
  const filteredTodoList = useRecoilValue(filterTodoListState);

  return {
    filteredTodoList,
  };
};
