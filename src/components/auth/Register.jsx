import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const { name, email, password, confirm } = user;

  const onChange = (e) => {
    // setUser({
    //   ...user,
    //   [e.target.name]: e.target.value
    // })
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios

    // password mínimo de 6 catacteres y que sean iguales

    // pasarlo al action
  };

  return (
    <div className="form-user">
      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Tu name"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="Repite tu password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear Cuenta"
            />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
