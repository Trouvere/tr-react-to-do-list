import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  ON_TOGGLE_IMPORTANT_TASK
} from "../constants";

const TASKS = [
  { id: 1, label: "Make react project", important: false, done: false },
  { id: 2, label: "Add Redux", important: true, done: false },
  { id: 3, label: "Add styles", important: false, done: false }
];

const tasks = (state = TASKS, { id, label, important, done, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          label,
          important,
          done
        }
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);

    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });
    case ON_TOGGLE_IMPORTANT_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.important = !task.important;
        }
        return task;
      });

    default:
      return state;
  }
};

export default tasks;
