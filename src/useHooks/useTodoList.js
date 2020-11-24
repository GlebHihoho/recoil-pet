import { atom, useRecoilState } from 'recoil';
import uniqueId from 'lodash/uniqueId';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodoItem = (text) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uniqueId(),
        text,
        isComplete: false,
      },
    ]);
  };

  const editTodoItemText = (id, text) => {
    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });

    setTodoList(newTodoList)
  };

  const editTodoItemComplete = (id, value) => {
    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: value };
      }
      return todo;
    });

    setTodoList(newTodoList)
  };

  const removeTodoItem = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return {
    todoList,
    setTodoList,
    removeTodoItem,
    editTodoItemText,
    editTodoItemComplete,
    addTodoItem,
  };
};
