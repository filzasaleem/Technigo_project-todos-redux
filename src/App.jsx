// Example from instructions pasted below

import { useSelector } from "react-redux";
import { TodoList } from "./components/Task/TodoList";
import { AddTask } from "./components/Task/AddTask";
import { Header } from "./components/Header";
import { ProjectList } from "./components/Project/ProjectList";

export const App = () => {
  const isOpen = useSelector((state) => state.model.isOpen);
  return (
    <div>
      {isOpen && <AddTask />}

      <Header />
      {/* <AddTask /> */}
      <TodoList />
      <ProjectList />
    </div>
  );
};
