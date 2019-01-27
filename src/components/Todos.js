import React, { Component } from "react";
// import TodoItem from "./components/Todo-item";
import TodoItem from './Todo-item';
import propTypes from "prop-types";

class Todos extends Component {

  render() {
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todoItem={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
    ));
  }
}

// Prop Types
Todos.propTypes = {
  todos: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteTodo: propTypes.func.isRequired
};

export default Todos;
