import estilos from './Cabecalho.module.css'
import {Lightning, } from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
              <Lightning
            weight='duotone'
            size={32}
             color='#fff'
             />
           
            <p>Cidade Inteligente</p>
            <Lightning
            weight='duotone'
            size={32}
             color='#fff'
             />

           
        </header>
    )
}