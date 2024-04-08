import estilos from './Lista.module.css'
import {useEffect, useState} from 'react'
import {Filme} from '../componentes/Filme'

export function Lista(){

  //criando isso para armazenar os dados da api , paa nao aparecer em console
  const [filmes, setFilmes] = useState([])

    const apiKey= "73449fc36d1b1585a0573cd7b33f08d8"

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc`)
        .then(resposta => resposta.json())
        .then(dados => setFilmes(dados.results))

    }, [])

    return(
        <main className={estilos.conteiner}>
          
          {filmes.map(umfilme => <Filme propsFilme={umfilme}/>)}
        
      </main>
    
    )
}