import { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProyectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS } from '../../types';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Tienda Virtual' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Diseño de sitio Web' },
    { id: 4, name: 'MERN' },
  ];

  const initialState = {
    projects: [],
    form: false,
  };

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectReducer, initialState);

  // funciones para crud
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // obtener proyectos
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
