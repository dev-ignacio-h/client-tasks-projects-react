import Project from './Project';

const projects = [
  { name: 'Tienda Virtual' },
  { name: 'Intranet' },
  { name: 'Diseño de sitio Web' }
];

const ListProjects = () => {
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.name} project= {project}/>
      ))}
    </ul>
  );
};

export default ListProjects;
