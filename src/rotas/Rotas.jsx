import { Routes, Route } from 'react-router-dom';
import { Login } from '../paginas/Login';
import { Inicial } from '../paginas/Inicial';
import { Sensor } from '../paginas/Sensor';
import { Lista } from '../paginas/Lista';
import { Cadastro } from '../paginas/Cadastro';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/inicial" element={<Inicial />}>
        <Route index element={<Lista />} />
        <Route path="sensor" element={<Sensor />} />
      </Route>
    </Routes>
  );
}
