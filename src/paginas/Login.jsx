import { useState } from 'react'
import estilos from './Login.module.css'

export function Login(){

    const [usuario , setUsuario] = useState('')
    const [senha , setSenha] = useState('')

    function obterDadosFormulario(e){

        e.preventDefault()

       console.log(`Usuario: ${usuario}`)
       console.log(`Senha: ${senha}`)


        
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