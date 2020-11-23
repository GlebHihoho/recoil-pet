import { atom, useRecoilValue } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const useTodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return {
    todoList,
  };
};
