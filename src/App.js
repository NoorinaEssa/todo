import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import store from './component/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
