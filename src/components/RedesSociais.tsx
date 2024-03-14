import React from 'react';
import './RedesSociais.css'; // Importe o arquivo CSS separado

interface RedesSociaisProps { }

const RedesSociais: React.FC<RedesSociaisProps> = () => {
    return (
        <div className="redes-portafolio">
            <ul className="list-inline redes-gremio">
                <li>
                    <a href="url_facebook" target="_blank" title="Ir a Facebook">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="url_instagram" target="_blank" title="Ir a Instagram">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="url_linkedin" target="_blank" title="Ir a Linkedin">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="url_twitter" target="_blank" title="Ir a Twitter">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="url_youtube" target="_blank" title="Ir a Youtube">
                        Youtube
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default RedesSociais;