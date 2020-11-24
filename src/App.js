import { RecoilRoot } from 'recoil';

import TodoList from './components/TodoList';
import TodoListFilter from './components/TodoListFilter';
import TodoItemCreator from './components/TodoItemCreator';
import TodoStats from './components/TodoStats';

import { Layout } from './styledComponents';

const App = () => {
  return (
    <RecoilRoot>
      <Layout>
        <TodoListFilter />
        <TodoStats />
        <TodoItemCreator />
        <TodoList />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
