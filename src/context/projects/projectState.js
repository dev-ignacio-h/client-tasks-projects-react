import { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProyectReducer from './projectReducer';

const ProjectState = (props) => {
  const initialState = {
    form: true
  };

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectReducer, initialState);

  // funciones para crud
  return (
    <ProjectContext.Provider
      value={{
        form: state.form
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
