import Task from './Task';

const ListTasks = () => {
  const porjectTasks = [
    { name: 'Elegir Plataforma', state: true },
    { name: 'Elegir Colores', state: false },
    { name: 'Elegir Plataformas de pago', state: false },
    { name: 'Elegir Plataforma', state: true }
  ];
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {porjectTasks.length === 0 ? (
          <li className="listado-tareas">
            <p>No hay tareas</p>
          </li>
        ) : (
          porjectTasks.map((task) => <Task key={Math.random()} task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListTasks;
