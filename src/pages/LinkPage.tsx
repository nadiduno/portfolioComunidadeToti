/* eslint-disable react/react-in-jsx-scope */
import { ContainerLink } from '../components/ContainerLink';
import { FooterLink } from '../components/FooterLink';
import { Menu } from '../components/Menu';
import styles from './HomePage.module.css';

export function LinkPage() {
    return (
        <>
            <header className={styles.menu}>
                <Menu />
            </header>
            <main>
                <div>
                    <div className={styles.containerLink}>
                        <ContainerLink />
                    </div>
                </div>
            </main>            
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
    );
}