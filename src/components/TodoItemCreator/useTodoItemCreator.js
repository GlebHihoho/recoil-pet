import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import uniqueId from 'lodash/uniqueId';

import { todoListState } from '../../containers/TodoList/useTodoList';

export const useTodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleChangeInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleAddItem = () => {
    console.log('add');
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uniqueId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return {
    inputValue,
    handleChangeInput,
    handleAddItem,
  };
};
