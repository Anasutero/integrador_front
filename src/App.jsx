import  estilos from './App.module.css'
import {Cabecalho} from './componentes/Cabecalho'
import {Lateral} from './componentes/Lateral'
import {Conteudo} from './componentes/Conteudo'


function App() {
  return (
    <>
     <div className={estilos.gridCointeiner}>
      <Cabecalho />
      <Lateral/>
      <Conteudo/>
     </div>
    </>
  )
}

export default App
