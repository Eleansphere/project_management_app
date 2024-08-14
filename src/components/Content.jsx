import { useContext } from 'react';
import { TasksContext } from '../shop/tasks-context.jsx';
import NewProject from './NewProject.jsx';
import NoProject from './NoProject.jsx';
import SelectedProject from './SelectedProject.jsx';

export default function Content() {
  const { projectState } = useContext(TasksContext);
  let content = (
    <SelectedProject
      tasks={projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedProjectId
      )}
    />
  );
  //filtrování pouze těch tasku, které patří k danemu projektu
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject />;
  }
  //zobrazení projektu
  return <>{content}</>;
}
