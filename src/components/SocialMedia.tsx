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
<<<<<<< HEAD:src/components/RedesSociais.tsx
    {
        iconesApp.map((iconeApp) => (
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
        ))
    }
=======
                <li>
                    <a href="linkedin.com/in/" target="_blank" title="Ir a Linkedin">
                    <FiLinkedin className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" title="Ir a Instagram" rel='noopener'>
                    <FiInstagram className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/" target="_blank" title="Ir a Facebook" rel='noopener'>
                    <FiGithub className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.whatsapp.com/" target="_blank" title="Ir a Youtube" rel='noopener'>
                    <FaWhatsapp  className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target="_blank" title="Ir a Youtube" rel='noopener'>
                    <FiYoutube className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
>>>>>>> d0d5303 (Alterações de menu de links e page do links):src/components/SocialMedia.tsx
            </ul >
        </div >
    );
}

