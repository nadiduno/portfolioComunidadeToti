import { NavLink } from 'react-router-dom'
import { CardProject, CardAppType } from './CardProject'
import styles from './CardProjectSeconds.module.css'

const cardsApp: CardAppType[] = [
    {
      id: 0,
      title: 'Projeto de vendas',
      descrition: 'Dashboard de Vendas',
      about: 'Métricas das vendas',
      url: 'https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/proj1.png?raw=true'
    },
    {
        id: 1,
        title: 'Projeto de RH',
        descrition: 'Dashboard de RH',
        url: 'https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/imgs/proj2.png?raw=true'
    },
    {
        id: 2,
        title: 'Projeto de vendas 2',
        descrition: 'Dashboard de Vendas',
        about: 'Métricas das vendas',
        url: 'https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/proj1.png?raw=true'
    },
    
]

export function CardProjectSeconds () {

    return(
        <div className={styles.containercard}>
            
            {cardsApp.map((cardApp) => {
                return( 
                    <nav>
                        <NavLink to={`/trabalhos#${cardApp.id+1}`} title={cardApp.title}>
                            <CardProject key={cardApp.id} cardApp={cardApp} />
                        </NavLink>
                    </nav>
                )
            })}
        </div>
    )
}