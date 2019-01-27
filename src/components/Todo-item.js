import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todoItem.completed ? "line-through" : "none"
    }
  }

  render() {

    const { id, title } = this.props.todoItem
    return (
      <div style={this.getStyle()}>
        <h4 className="">
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="mr-5" />
          {title}
          <i className="far fa-times-circle float-right" onClick={this.props.deleteTodo.bind(this, id)}></i>
        </h4>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todoItem: propTypes.object.isRequired
};

export default TodoItem;
