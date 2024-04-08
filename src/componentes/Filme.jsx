import estilos from './Filme.module.css'
import {Card} from './Card'

export function Filme({propsFilme}){
    return(
        <Card>
        <figure className={estilos.conteiner}>
            <img src={`https://image.tmdb.org/t/p/w400/${propsFilme.poster_path}`}/>
            <figcaption>{propsFilme.title}</figcaption>
            <p>{propsFilme.overview}</p>
            <p>{propsFilme.vote_average}</p>
        </figure>
        </Card>
    )
}