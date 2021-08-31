import { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {
  // obtener el state del formulario
  const projectsContext = useContext(ProjectContext);
  const { form, showForm } = projectsContext;

  // state para proyecto
  const [project, setProject] = useState({
    name: '',
  });

  // extraer nombre de proyecto
  const { name } = project;

  // lee los cont3enidos del input
  const onChangeProject = (e) => {
    setProject((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // submit
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    // validar el proyecto

    // agregar al state

    // Reiniciar el form
  };

  const showFormHandler = () => showForm();

  return (
    <>
      <button type="button" className="btn btn-block" onClick={showFormHandler}>
        Nuevo Proyecto
      </button>
      {form && (
        <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}
    </>
  );
};

export default NewProject;
