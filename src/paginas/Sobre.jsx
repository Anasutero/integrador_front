import estilos from './Sobre.module.css'


export function Sobre(){

    return(
        <div className={estilos.conteiner}>

      <p className={estilos.titulo}>Sobre</p>

        <div className={estilos.perfil}>
                <img 
                className={estilos.avatar}
                src='https://avatars.githubusercontent.com/u/129601393?v=4'
                />
                <p className={estilos.texto}>Ana Mária Sutéro</p>
                <p className={estilos.texto}>2DS-Bosch</p>
           </div>
        </div>
    )

}