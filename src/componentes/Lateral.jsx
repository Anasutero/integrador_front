import estilos from './Lateral.module.css'

export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
            <img 
            className={estilos.imagemCabecalho}
            src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={estilos.perfil}>
                <img 
                className={estilos.avatar}
                src='https://avatars.githubusercontent.com/u/129601393?v=4'
                />
                <strong>Ana</strong>
           </div>
           </header>
           
        </aside>
    )
}