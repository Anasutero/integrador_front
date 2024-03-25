import estilos from './Cabecalho.module.css'
import {FilmReel, FilmStrip} from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <FilmReel
            weight='duotone'
            size={32}
             color='#fff'
             />
            <p>Recomendações</p>

            <FilmStrip
            weight='duotone'
            size={32}
             color='#fff'
             />
        </header>
    )
}