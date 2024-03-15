import React from 'react';
// import './RedesSociais.css'; // Importe o arquivo CSS separado

import styles from './RedesSociais.module.css'

interface RedesSociaisProps { }

export const RedesSociais: React.FC<RedesSociaisProps> = () => {
    return (
        <div className={styles.redesportafolio}>
            <ul className={styles.listinline}> {/* redes-gremio */}
                <li>
                    <a href="https://www.facebook.com/" target="_blank" title="Ir a Facebook">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" title="Ir a Instagram">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="linkedin.com/in/" target="_blank" title="Ir a Linkedin">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank" title="Ir a Twitter">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target="_blank" title="Ir a Youtube">
                        Youtube
                    </a>
                </li>
            </ul>
        </div>
    );
};
