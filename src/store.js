import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasksSlice";
import { projects } from "./reducers/projectSlice";
import modelReducer from "./reducers/modelSlice";

const reducer = combineReducers({
  tasks: tasks.reducer,
  projects: projects.reducer,
  model: modelReducer,
});

const store = configureStore({ reducer });

export default store;
