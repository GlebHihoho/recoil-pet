import { useTodoList } from './useTodoList';

import TodoItemCreator from '../../components/TodoItemCreator';
import TodoItem from '../../components/TodoItem';

const TodoList = () => {
  const { todoList } = useTodoList();

  return (
    <>
      <TodoItemCreator />
      <div>TodoList</div>
      {todoList.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </>
  );
};

export default TodoList;
