import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  ON_TOGGLE_IMPORTANT_TASK,
  CHANGE_FILTER
} from "../constants";

export const addTask = (id, label, important, done) => ({
  type: ADD_TASK,
  id,
  label,
  important,
  done
});
export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});
export const onToggleImportantTask = id => ({
  type: ON_TOGGLE_IMPORTANT_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});
