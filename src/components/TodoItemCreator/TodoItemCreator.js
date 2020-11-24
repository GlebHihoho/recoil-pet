import { useState } from 'react';

import { useTodoList } from '../../useHooks/useTodoList';

const TodoItemCreator = () => {
  const { addTodoItem } = useTodoList();
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleAddItem = () => {
    addTodoItem(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
