import { useTodoItem } from './useTodoItem';

const TodoItem = (props) => {
  const { todo } = props;
  const { id, text, isComplete } = todo;
  const { inputValue, handleChangeInput, handleAddItem } = useTodoItem();

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddItem}>X</button>
    </>
  );
};

export default TodoItem;