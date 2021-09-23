import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
  TOGGLE_DONE,
} from "../const";

const initialState = {
  tasks: [
    {
      id: 0,
      todo: "Learn HTML/CSS",
      isDone: true,
    },

    {
      id: 1,
      todo: "Learn JS",
      isDone: true,
    },

    {
      id: 2,
      todo: "Learn Angular",
      isDone: false,
    },

    {
      id: 3,
      todo: "Learn Express",
      isDone: false,
    },
  ],
  filter: "none",
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, todo: payload.todo } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case FILTER_TASK:
      return {
        ...state,
        filter: payload,
      };
    case TOGGLE_DONE:
      return {
          ...state,
          tasks: state.tasks.map(task => task.id === payload ? {...task, isDone: !task.isDone} : task)
      };
    default:
      return state;
  }
};

export default taskReducer;