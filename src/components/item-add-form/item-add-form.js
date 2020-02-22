import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { label } = this.state;
    const { onItemAdded } = this.props;
    if (label.length > 3) {
      onItemAdded(new Date().getTime(), label, false, false);

      this.setState({ label: "" });
    }
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control new-todo-label"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
        />

        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}
