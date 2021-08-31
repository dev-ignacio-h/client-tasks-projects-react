import { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {
  // obtener el state del formulario
  const projectsContext = useContext(ProjectContext);
  const { form } = projectsContext;

  // state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  // extraer nombre de proyecto
  const { nombre } = proyecto;

  // lee los cont3enidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
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

  return (
    <>
      <button type="button" className="btn btn-block">
        Nuevo Proyecto
      </button>
      {form && (
        <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
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
