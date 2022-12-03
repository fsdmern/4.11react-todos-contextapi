import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo />
        <TodoList />
      </div>
    );
  }
}

export default TodoContainer;
