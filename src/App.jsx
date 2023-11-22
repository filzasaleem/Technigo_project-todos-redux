// Example from instructions pasted below

import { useSelector } from "react-redux";

import { tasks } from "./reducers/tasksSlice";
import { TodoList } from "./components/TodoList";
import { AddTask } from "./components/AddTask";

export const App = () => {
  // const isOpen = useSelector((state) => state.model.isOpen);
  return (
    <div>
      {/* {isOpen && <AddTask />} */}
      <AddTask />

    </div>
  );
};
