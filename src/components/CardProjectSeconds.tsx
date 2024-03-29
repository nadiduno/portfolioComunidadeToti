import styles from './CardProjectSeconds.module.css'

import { CardProject, CardAppType } from './CardProject'

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
        title: 'Prjeto de RH',
        descrition: 'Dashboard de RH',
        url: 'https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/imgs/proj2.png?raw=true'
    },
    {
        id: 2,
        title: 'Projeto de vendas 2',
        descrition: 'Dashboard de Vendas',
        about: 'Métricas das vendas',
        url: 'https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/proj1.png?raw=true'
    }
]

export function CardProjectSeconds () {
    return(
        <div className={styles.containercard}>
            
            {cardsApp.map((cardApp) => {
                return <CardProject key={cardApp.id} cardApp={cardApp} />
            })}
        </div>
    )
}