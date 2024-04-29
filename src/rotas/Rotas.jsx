// criacao do componente
//Routes: trata de todas as rotas
//Route so de uma especifica
import{Routes,Route} from 'react-router-dom'
import {Login} from '../paginas/Login'
import {Inicial} from '../paginas/Inicial'
import {Perfil} from '../paginas/Perfil'
import {Lista} from '../paginas/Lista'
import {Sobre} from '../paginas/Sobre'

export function Rotas(){
    return(
        <Routes>

            <Route path='/' element={ <Login/>}/>

            <Route path='/inicial' element={ <Inicial/>}>
            <Route index element={ <Lista/>}/>
            <Route path='perfil' element={ <Perfil/>}/>
            <Route path='sobre' element={ <Sobre/>}/>

            </Route>

        </Routes>
    )
}