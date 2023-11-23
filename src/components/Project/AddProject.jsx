import { useState } from "react";
import { useDispatch } from "react-redux";


export const AddProject = () => {
    const [projectName, setTask] = useState("");
    const dispatch = useDispatch();

const handleSubmit = ()=>{
    e.preventDefault();
    dispatch()


}
  return (
    <div>
         <form onSubmit={handleSubmit}>
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
  )
}
