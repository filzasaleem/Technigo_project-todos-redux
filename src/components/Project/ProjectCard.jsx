import { useDispatch } from "react-redux";
import { IconCheck } from "../../assets/icons2";
import { IconUnCheck } from "../../assets/icons2";
import { IconTrash } from "../../assets/icons2";
import { TaskCard } from "../Task/TaskCard";
import { projectIsDone, removeProject, setAddProjectTask } from "../../reducers/projectSlice";
import { openModal } from "../../reducers/modelSlice";
import "./ProjectCard.css"

export const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(setAddProjectTask({ projectId: project.createdDate }));

    dispatch(openModal());
  };

  const handleCkeckBox = () => {
    dispatch(projectIsDone(project.createdDate))

  };
  return (
    <div className="projectCard">
      <div className="projectCardHeader">
        <span className="projectCardName">{project.projectName}</span>
        <span className="projectCardIsDone" onClick={() => handleCkeckBox()}>
          {project.isDone ? <IconCheck /> : <IconUnCheck />}
        </span>
      </div>
      <div className="projectsTasks">
      {project.tasks?.map((task) => (
        <TaskCard
          createdDate={task.createdDate}
          name={task.name}
          comment={task.comment}
          category={task.category}
          isDone={task.isDone}
          deadline={task.deadline}
          key={task.createdDate}
          projectId={project.createdDate}
        />
        
      ))}
      </div>
      <div >
        <span
          onClick={() => dispatch(removeProject(project.createdDate))}
          className="todoCardRemove"
        >
            <IconTrash />
        </span>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};
