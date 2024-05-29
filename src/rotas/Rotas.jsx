import { Routes, Route } from 'react-router-dom';
import { Login } from '../paginas/Login';
import { Inicial } from '../paginas/Inicial';
import { CadSensor} from '../paginas/CadSensor';
import { Cadastro } from '../paginas/Cadastro';
import { Localizacao } from '../paginas/Localizacao';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicial" element={<Inicial />}>
      <Route path='localizacao' element={ <Localizacao /> } />
        <Route path="cadsensor" element={<CadSensor />} />
        <Route path="cadusuario" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}
