import Sidebar from '../layout/Sidebar';
import Topbar from '../layout/Topbar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Topbar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
