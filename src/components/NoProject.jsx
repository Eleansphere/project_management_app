import { useContext } from "react";
import noProjectImg from "../assets/no-projects.png";
import Button from "./Button.jsx";
import { TasksContext } from "../shop/tasks-context.jsx";
export default function NoProject(){

    const { onStartAddProject } = useContext(TasksContext);
    return(
        <div className="flex flex-col items-center mt-24 text-centered w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={ noProjectImg } alt="noProject" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with new one</p>
            <p><Button onClick={onStartAddProject}>Create new project</Button></p>
        </div>
    )
}