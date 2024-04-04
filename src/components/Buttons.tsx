/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Buttons.module.css'

export interface ButtonAppType
{
      id: number
      title: string
      urlbutton: string
}

interface AppProps {
    buttonApp: ButtonAppType
  }
  
export function Buttons ({ buttonApp }: AppProps) {
    return(
        <>
            <a className={styles.buttonsborder} href={buttonApp.urlbutton} target="_blank" title={buttonApp.title}>
                {buttonApp.title}
            </a>
        </>
    )
}