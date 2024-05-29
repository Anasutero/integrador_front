import estilos from './Lateral.module.css'
import { Link } from "react-router-dom";

export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
            <img 
            className={estilos.imagemCabecalho}
            src='https://img.freepik.com/vector-premium/vista-superior-3d-mapa-punto-ubicacion-destino-vista-superior-aerea-limpia-mapa-ciudad-dia-calles-rios-mapa-urbano-blanco-concepto-navegador-mapas-gps_34645-1098.jpg'
            />

            <div className={estilos.perfil}>
                <img 
                className={estilos.avatar}
                src='https://s3.amazonaws.com/ceabs-sites/blog.ceabs.com.br/static/wp-content/uploads/2017/09/13100855/diferenca-entre-bloqueador-localizador-rastreador-ceabs.jpg'
                />
           </div>
           </header>
            <section>
                <Link 
                className={estilos.botao}
                to='/inicial'
                >
                    Leitura Sensores
                </Link>

                <Link 
                    className={estilos.botao}
                    to='/inicial/localizacao'
                >Mapa
                </Link>
                
                <Link 
                className={estilos.botao}
                to='cadsensor'
                >
                    Cadastro de sensores
                </Link>

                <Link 
                className={estilos.botao}
                to='cadusuario'
                >
                    Cadastro de usuario
                </Link>

                




            </section>


           
        </aside>
    )
}