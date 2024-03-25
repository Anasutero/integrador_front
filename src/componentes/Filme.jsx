import estilos from './Filme.module.css'
import {Card} from './Card'

import poster1 from "../assets/poster1.jpg"

export function Filme(){
    return(
        <Card>
        <figure className={estilos.conteiner}>
            <img src={poster1}/>
            <figcaption>Harry Potter e a Pedra Filosofal (2001)</figcaption>
            <p>Esta é a primeira adaptação da série de best-sellers de Harry Potter, sobre um órfão que descobre que os seus pais eram feiticeiros e que ele também possui poderes mágicos. Harry Potter passou a maior parte do seu tempo debaixo da escada na casa dos Dursleys, seus tios que não gostam dele.</p>
            <p>79%</p>
        </figure>
        </Card>
    )
}