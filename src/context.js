import React from 'react';
import {v4 as uuid} from 'uuid';

const TodosContext = React.createContext();
const TodosProvider = TodosContext.Provider;
const TodosConsumer = TodosContext.Consumer;

class MyContext extends React.Component {
  state = {
    todos: [
      {id: uuid(), title: 'Bring Milk', completed: true},
      {id: uuid(), title: 'Bring Sugar', completed: true},
      {id: uuid(), title: 'Bring Tea Powder', completed: true},
      {id: uuid(), title: 'Make Tea', completed: false},
      {id: uuid(), title: 'Serve Tea', completed: false},
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <TodosProvider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          delTodo: this.delTodo,
          addTodoItem: this.addTodoItem,
        }}
      >
        {this.props.children}
      </TodosProvider>
    );
  }
}

export {TodosContext, MyContext, TodosConsumer};
