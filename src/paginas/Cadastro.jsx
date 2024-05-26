import React, { useState } from 'react';
import estilos from './Cadastro.module.css';
import { useNavigate } from 'react-router-dom';

export function Cadastro() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const obterDadosFormulario = (e) => {
    e.preventDefault();
    console.log(userData);
    navigate('/inicial'); // Navegar para a página inicial após o cadastro
  };

  return (
    <div className={estilos.container}>
      <form className={estilos.form} onSubmit={obterDadosFormulario}>
        <h1 className={estilos.h1}>Cadastro de Usuário</h1>
        <div className={estilos.formGroup}>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={estilos.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={estilos.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className={estilos.button} type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
