/* eslint-disable react/react-in-jsx-scope */
import styles from './CardProject.module.css'

export interface CardAppType
{
      id: number
      title: string
      descrition:string
      about?: string
      url: string
}

interface AppProps {
    cardApp: CardAppType
  }
  


export function CardProject ({ cardApp }: AppProps) {
    return(
        <div className={styles.container}> 
            <div className={styles.CardProject}>
                <img
                    className={styles.cover}
                    src={cardApp.url}
                    title={cardApp.title}    
                />   
                <div className={styles.about}>
                    <h2>{cardApp.descrition}</h2>
                    {cardApp.about && <p>{cardApp.about}</p>}
                </div> 
                          
            </div>    
        </div>
    )
}