/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FiHome, FiGithub, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
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
        title: 'Ir a Home',
        urlicone: '/'
    },
    {
        id: 1,
        iconemenu: FiLinkedin,
        title: 'Ir a Linkedin',
        urlicone: 'https://www.linkedin.com/'
    },
    {
        id: 2,
        iconemenu: FiInstagram,
        title: 'Ir a Instagram',
        urlicone: 'https://www.instagram.com/'
    },
    {
        id: 3,
        iconemenu: FiFacebook,
        title: 'Ir a Facebook',
        urlicone: 'https://www.facebook.com/'
    },
    {
        id: 4,
        iconemenu: FiYoutube,
        title: 'Ir a Youtube',
        urlicone: 'https://www.youtube.com/'
    },
    {
        id: 5,
        iconemenu: FiGithub,
        title: 'Ir a Github',
        urlicone: 'https://github.com/'
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
