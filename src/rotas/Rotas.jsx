import { Routes, Route } from 'react-router-dom';
import { Login } from '../paginas/Login';
import { Inicial } from '../paginas/Inicial';
import { ListaSensores } from '../paginas/ListaSensores'
import { CadSensor} from '../paginas/CadSensor';
import { Cadastro } from '../paginas/Cadastro';
import { Localizacao } from '../paginas/Localizacao';
import { TabelaSensor } from '../paginas/TabelaSensor'

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicial" element={<Inicial />}>
      <Route index element={<ListaSensores/>}/>
        <Route path='localizacao' element={<Localizacao />} />
        <Route path="cadsensor" element={<CadSensor />} />
        <Route path="cadusuario" element={<Cadastro />} />
        <Route path='infoSensor' element={<TabelaSensor/>}/>
      </Route>
    </Routes>
  );
}
