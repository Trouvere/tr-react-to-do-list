import React, { Component } from "react";

import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {
  const elements = items.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

class TodoListContainer extends Component {
  render() {
    const items = this.props.items;

    if (!items) {
      return <h1>Loading items</h1>;
    }
    return <TodoList items={items} {...this.props} />;
  }
}

export default TodoListContainer;
