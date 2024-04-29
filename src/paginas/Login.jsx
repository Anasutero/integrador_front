import { useState } from 'react'
import estilos from './Login.module.css'
import {useNavigate} from 'react-router-dom'

export function Login(){

    const [usuario , setUsuario] = useState('')
    const [senha , setSenha] = useState('')


    const navigate = useNavigate()

    function obterDadosFormulario(e){
        navigate('inicial')

    }


    return(
        <div className={estilos.conteiner}>

            <form 
            className={estilos.formulario}
            onSubmit={obterDadosFormulario}//recohece o click do botao

            >

                <input 
                className={estilos.campo}
                placeholder="Usuario"
                value={usuario}
                onChange={e => setUsuario(e.target.value)}//target identifica o lemento html que esta sendo utilizado
                />
                <input className={estilos.campo}
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}//on change reconhece cada operacao do input

                />
                <button
                 className={estilos.botao}
                >Entrar</button>
            </form>
        </div>
    )
}