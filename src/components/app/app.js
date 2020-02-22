import React, { Component } from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import {
  addTask,
  removeTask,
  completeTask,
  onToggleImportantTask,
  changeFilter
} from "../../actions/actionCreator";

import { connect } from "react-redux";

import "./app.css";

class App extends Component {
  state = {
    search: ""
  };

  filterItems = (items, activeFilter) => {
    switch (activeFilter) {
      case "done":
        return items.filter(items => items.done);
      case "active":
        return items.filter(items => !items.done);
      default:
        return items;
    }
  };

  onSearchChange = search => {
    this.setState({ search });
  };

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { search } = this.state;
    const { items, filter } = this.props;
    const doneCount = items.filter(item => item.done).length;
    const toDoCount = items.length - doneCount;
    const visibleItems = this.searchItems(
      this.filterItems(items, filter),
      search
    );

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />

        <div className="search-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.props.changeFilter}
          />
        </div>

        <TodoList
          items={visibleItems}
          onToggleImportant={this.props.onToggleImportantTask}
          onToggleDone={this.props.completeTask}
          onDelete={this.props.removeTask}
        />

        <ItemAddForm onItemAdded={this.props.addTask} />
      </div>
    );
  }
}
export default connect(
  state => ({
    items: state.tasks,
    filter: state.filters
  }),
  {
    addTask,
    removeTask,
    completeTask,
    onToggleImportantTask,
    changeFilter
  }
)(App);
