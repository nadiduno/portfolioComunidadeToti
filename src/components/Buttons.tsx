import styles from './Buttons.module.css'

export interface ButtonAppType
{
      id: number
      title: string
      url: string
}

interface AppProps {
    buttonApp: ButtonAppType
  }
  
export function Buttons ({ buttonApp }: AppProps) {
    return(
        <>
            <a className={styles.buttonsborder} href={buttonApp.url} target="_blank" title={buttonApp.title}>
                {buttonApp.title}
            </a>
        </>
    )
}