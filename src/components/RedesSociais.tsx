import styles from './RedesSociais.module.css'
import {FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from 'react-icons/fi'

export function RedesSociais(){
    return( 
        <div className={styles.redesPortafolio}>
            <ul className={styles.listinline}>
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
            </ul>
        </div>
    );
}
