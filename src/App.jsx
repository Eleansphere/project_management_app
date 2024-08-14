import Sidebar from "./components/Sidebar.jsx";
import TasksContextProvider from "./shop/tasks-context.jsx";
import Content from "./components/Content.jsx";

function App() {

  return (
    <TasksContextProvider>
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar/>
      <Content/>
    </main>
  </TasksContextProvider>
  );
}

export default App;
