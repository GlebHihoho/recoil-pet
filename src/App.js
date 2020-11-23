import { RecoilRoot } from 'recoil';

import TodoList from './containers/TodoList';

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
