/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FiHome, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'
import styles from './SocialMedia.module.css';

interface IconeAppType {
    id: number
    iconemenu: IconType
    title: string
    urlicone: string
}

const iconesApp: IconeAppType[] = [
    {
        id: 0,
        iconemenu: FiHome,
        title: 'Home',
        urlicone: '/'
    },
    {
        id: 1,
        iconemenu: FiLinkedin,
        title: 'Linkedin',
        urlicone: 'https://www.linkedin.com/'
    },
    {
        id: 2,
        iconemenu: FaWhatsapp,
        title: 'WhatsApp',
        urlicone: 'https://api.whatsapp.com/send?phone=559288441399&text=Olá%21%20Gostaria%20de%20falar%20contigo.' 
    }
]

export function RedesSociais() {
    return (
        <div className={styles.redesPortafolio}>
            <ul className={styles.listinline}>
                {iconesApp.map((iconeApp) => (
                    <li key={iconeApp.id}>
                        {iconeApp.id === 0 ? (
                            <nav>
                                <NavLink to={iconeApp.urlicone} title={iconeApp.title} rel='noopener noreferrer'>
                                    <iconeApp.iconemenu className={`${styles.icons} ${styles.iconColor}`} size={25} />
                                </NavLink>
                            </nav>
                        ) : (
                            <a href={iconeApp.urlicone} target="_blank" title={iconeApp.title} rel='noopener noreferrer'>
                                <iconeApp.iconemenu className={`${styles.icons} ${styles.iconColor}`} size={25} />
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
