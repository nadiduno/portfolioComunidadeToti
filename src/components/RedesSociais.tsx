import { NavLink } from 'react-router-dom'
import {FiHome, FiGithub, FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from 'react-icons/fi'


import styles from './RedesSociais.module.css'

export function RedesSociais(){
    return( 
        <div className={styles.redesPortafolio}>
            <ul className={styles.listinline}>
                <li>
                    <nav>
                        <NavLink to='/' title='Ir a Home'>
                            <FiHome className= {`${styles.icons} ${styles.home}`}  size={25} color='fff'/>
                        </NavLink>
                    </nav>
                </li>
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
                    <a href="https://www.facebook.com/" target="_blank" title="Ir a Facebook" rel='noopener'>
                    <FiFacebook className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target="_blank" title="Ir a Youtube" rel='noopener'>
                    <FiYoutube className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/" target="_blank" title="Ir a Linkedin">
                    <FiGithub className= {styles.icons} size={25} color='fff'/>
                    </a>
                </li>
            </ul>
        </div>
    );
}
