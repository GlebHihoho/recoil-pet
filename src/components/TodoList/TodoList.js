import { useTodoListFilter } from '../../useHooks/useTodoListFilter';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const { filteredTodoList } = useTodoListFilter();

  return (
    <div>
      {filteredTodoList.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default TodoList;
