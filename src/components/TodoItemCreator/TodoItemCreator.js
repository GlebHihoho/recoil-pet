import { useTodoItemCreator } from './useTodoItemCreator';

const TodoItemCreator = () => {
  const { 
    inputValue,
    handleChangeInput,
    handleAddItem,
  } = useTodoItemCreator();

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddItem}>Add</button>
    </>
  );
};

export default TodoItemCreator;
