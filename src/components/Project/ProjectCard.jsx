import { useDispatch } from "react-redux";
import { IconCheck } from "../../assets/icons2";
import { IconUnCheck } from "../../assets/icons2";
import { IconTrash } from "../../assets/icons2";
import { TaskCard } from "../Task/TaskCard";
import { removeProject, setAddProjectTask } from "../../reducers/projectSlice";
import { openModal } from "../../reducers/modelSlice";

export const ProjectCard = ({ project }) => {
    const dispatch = useDispatch();
    
  
    const handleAddTask = () => {
     
      dispatch(setAddProjectTask({ projectId: project.createdDate }));

      dispatch(openModal());
    };
  
    return (
      <div>
        <h4>{project.projectName}</h4>
        <span>isDone: {project.isDone.toString()}</span>
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
        <div>
          <span
            onClick={() => dispatch(removeProject(project.createdDate))}
            className="todoCardRemove"
          >
            Remove Project
          </span>
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };
