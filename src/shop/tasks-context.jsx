import { createContext, useState } from 'react';

//Template pro našeptávač kontextu
export const TasksContext = createContext({
  projectState: {
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  },
  onStartAddProject: () => {},
  onSelectProject: () => {},
  handleProjectDelete: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  settingData: () => {},
  cancelProject: () => {},
  selectedProject: () => {},
});

export default function TasksContextProvider({ children }) {
  //State pro ukládání jednotlivych projektu, tasku. Výchozí stav při první načtení app.
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  //přidání projektu pro sidebar a content area.
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  //selekce projektu
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  //přidání tasku k selektovanému projektu
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.floor(Math.random() * 100);
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        selectedProjectId: prevState.selectedProjectId,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  //mazaní zobrazeného projektu
  function handleProjectDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  //mazání tasku podle selektovaného ID
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };
  //vyhledání selektovaného projektu
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  console.log(projectState);

  //Uložení input hodnot z formulare do pole s projekty.
  function settingData(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.floor(Math.random() * 100),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  // Cancel btn změna id na undefined a zachování předchozího stavu
  function cancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  /***********KONTEXT**************** */

  const tasksContextValue = {
    projectState,
    selectedProjectId: projectState.selectedProjectId,
    onStartAddProject: handleStartAddProject,
    onSelectProject: handleSelectProject,
    handleProjectDelete,
    handleAddTask,
    handleDeleteTask,
    settingData,
    cancelProject,
    selectedProject,
  };

  return (
    <TasksContext.Provider value={tasksContextValue}>
      {children}
    </TasksContext.Provider>
  );
}
