import { useState } from 'react';

export const useTodoItem = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleAddItem = () => {
    console.log('add');
  };

  return {
    inputValue,
    handleChangeInput,
    handleAddItem,
  };
};
