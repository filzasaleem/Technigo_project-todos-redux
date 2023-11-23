import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../reducers/projectSlice";
import { closeProjectModal } from "../../reducers/modelSlice";

export const AddProject = () => {
  const [projectName, setTask] = useState("");
  const dispatch = useDispatch();

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProject({
        projectName: projectName,
        createdDate: new Date().getTime(),
        isDone: false,
        tasks: [],
      })
    );
    dispatch(closeProjectModal());
  };

  return (
    <div>
      <form onSubmit={handleProjectSubmit}>
        <div className="projectName">
          <label htmlFor="project">Project Name:</label>
          <input
            type="text"
            id="project"
            name="project"
            value={projectName}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="submitButton">
          Create
        </button>
      </form>
    </div>
  );
};
