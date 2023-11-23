import { useSelector } from "react-redux";
import { ProjectCard } from "./ProjectCard";
import "./ProjectList.css"

export const ProjectList = () => {
  const projectList = useSelector((state) => state.projects.projectList);
  console.log("projects", projectList);

  return (
    <section className="projectList">
      {projectList.map((project) => (
        <ProjectCard key={project.createdDate} project={project} />
      ))}
    </section>
  );
};
