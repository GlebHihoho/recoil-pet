import { useTodoList } from '../../useHooks/useTodoList';

const TodoItem = (props) => {
  const { todo } = props;
  const { id, isComplete } = todo;

  const { removeTodoItem, editTodoItemText, editTodoItemComplete } = useTodoList();

  const handleChangeInput = ({ target: { value } }) => {
    editTodoItemText(id, value);
  };

  const handleRemoveItem = () => {
    removeTodoItem(id);
  };

  const handleChangeComplete = () => {
    editTodoItemComplete(id, !isComplete);
  };

  return (
    <>
      <input
        type="text"
        value={todo.text}
        onChange={handleChangeInput}
      />
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleChangeComplete}
      />
      <button onClick={handleRemoveItem}>X</button>
    </>
  );
};

export default TodoItem;