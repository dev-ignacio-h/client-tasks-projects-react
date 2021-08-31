import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import { useContext, useEffect } from 'react';

const ListProjects = () => {
  // extraer proyectos de state inicial
  const proyectContext = useContext(ProjectContext);
  const { projects, getProjects } = proyectContext;

  // obtener proyectos cuando carga el componente
  useEffect(() => {
    getProjects();
  }, []);

  // revisar si projects tiene contenido
  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
