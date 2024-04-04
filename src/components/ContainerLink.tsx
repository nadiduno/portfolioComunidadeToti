/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import styles from './ContainerLink.module.css'
import { IconType } from 'react-icons'
import { FiInstagram, FiLinkedin, FiYoutube, FiGithub} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

  
interface IconeAppType
{
    id: number
    iconemenu: IconType
    title: string
    urlicone: string
}

const iconesApp: IconeAppType[] = [
    {
      id: 0,
      iconemenu: FaWhatsapp,
      title: 'WhatsApp',
      urlicone: 'https://api.whatsapp.com/send?phone=559288441399&text=Olá%21%20Gostaria%20de%20falar%20contigo.' 
    },  
    {
        id: 1,
        iconemenu: FiInstagram,
        title: 'Instagram',
        urlicone: 'https://www.instagram.com/' 
    },
    {
        id: 2,
        iconemenu: FiGithub,
        title: 'GitHub',
        urlicone: 'https://github.com/' 
    },
    {
        id: 3,
        iconemenu: FiYoutube,
        title: 'Youtube',
        urlicone: 'https://www.youtube.com/' 
    },
    {
        id: 4,
        iconemenu: FiLinkedin,
        title: 'Linkedin',
        urlicone: 'https://www.linkedin.com/' 
    }  
]

export function ContainerLink () {
    return(
        <div className={styles.container}>
            {iconesApp.map((iconeApp) => (
                <a target="_blank" rel="noopener noreferrer" href={iconeApp.urlicone} className={styles.link}>
                    <iconeApp.iconemenu className={styles.icons} />
                    <div className={styles.tooltip}>{iconeApp.title}</div>
                </a>
            ))}
        </div>
    )
}