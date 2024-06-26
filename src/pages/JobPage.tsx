/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'; 

import { ContainerJob } from '../components/ContainerJob'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'
import { RedesSociais } from '../components/SocialMedia'

import styles from './HomePage.module.css'
import { ContainerLink } from '../components/ContainerLink';

export function JobPage() {
    useEffect(() => {
        const hash = window.location.hash; 
        if (hash) {
            const id = parseInt(hash.substring(1));
            scrollToSection(id); 
        }
    }, []); 

    function scrollToSection(id: number) {
        const element = document.getElementById(`${id}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <>
            <main className={styles.menu}>
                <Menu />
            </main>
            <div className={styles.container}>
                <ContainerJob />
            </div>
            <div>
                <RedesSociais />
            </div>
            <div className={styles.containerLinkHome}>
                <ContainerLink />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
    )
}