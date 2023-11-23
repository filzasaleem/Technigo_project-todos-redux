import { useDispatch } from "react-redux";
import { IconCheck } from "../../assets/icons2";
import { IconUnCheck } from "../../assets/icons2";
import { IconTrash } from "../../assets/icons2";
import { TaskCard } from "../Task/TaskCard";
import { removeProject } from "../../reducers/projectSlice";

export const ProjectCard = ({ project }) => {
    const dispatch = useDispatch();
    // const handleRemove = () => {
        

    // }
  return (
    <div>
      <h4>project.projectName</h4>
      <span>isDone : project.isDone</span>
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
        <span onClick={() => dispatch(removeProject(project.createdDate))} className="todoCardRemove">
          <IconTrash />
        </span>
      </div>
    </div>
  );
};
