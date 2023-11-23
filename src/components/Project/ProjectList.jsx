import { useSelector } from "react-redux";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  const projectList = useSelector((state) => state.projects.projectList);
  console.log("projects", projectList);

  return (
    <>
      {projectList.map((project) => (
        <ProjectCard key={project.createdDate} project={project} />
      ))}
    </>
  );
};
