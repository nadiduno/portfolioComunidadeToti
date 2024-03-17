import styles from './FooterLink.module.css';

export function FooterLink() {
    return (
        <footer className={styles.container}>
            <p></p>
            <div className={styles.collaborators}>
                <a href="https://www.linkedin.com/in/nadiduno/" target="_blank">
                    <img src="https://media.licdn.com/dms/image/D4D35AQGGPqar_zxotg/profile-framedphoto-shrink_200_200/0/1709583111683?e=1711213200&v=beta&t=tQUv78UqqtNUif5YzTH3tqfbIhFLP7VIpcjkDl-Iqhc" alt="colaborardor1" />  {/* recuerda describir tu foto de perfil sigue de ejemplo colaborador 6 */}
                </a>
                <a href="https://www.linkedin.com/in/maolylara/" target="_blank">
                    <img src="https://media.licdn.com/dms/image/D4D03AQFxpNQeFmofnw/profile-displayphoto-shrink_200_200/0/1698188040979?e=1715817600&v=beta&t=Jt7znLWjfsUigLdD8-gvMPku1tFXmo5sf1rDPCOT-hs" alt="colaborador2" />
                </a>
                <a href="enlace_al_linkedin3" target="_blank"> {/*coloca tu link de perfil */}
                    <img src="https://media.licdn.com/dms/image/D4D35AQGGPqar_zxotg/profile-framedphoto-shrink_200_200/0/1709583111683?e=1711213200&v=beta&t=tQUv78UqqtNUif5YzTH3tqfbIhFLP7VIpcjkDl-Iqhc" alt="Colaborador 3" />   {/* coloca el link de tu foto de perfil */}
                </a>
                <a href="enlace_al_linkedin4" target="_blank"> {/*coloca tu link de perfil */}
                    <img src="https://media.licdn.com/dms/image/D4D35AQGGPqar_zxotg/profile-framedphoto-shrink_200_200/0/1709583111683?e=1711213200&v=beta&t=tQUv78UqqtNUif5YzTH3tqfbIhFLP7VIpcjkDl-Iqhc" alt="Colaborador 4" />  {/* coloca el link de tu foto de perfil */}
                </a>
                <a href="enlace_al_linkedin5" target="_blank"> {/*coloca tu link de perfil */}
                    <img src="https://media.licdn.com/dms/image/D4D35AQGGPqar_zxotg/profile-framedphoto-shrink_200_200/0/1709583111683?e=1711213200&v=beta&t=tQUv78UqqtNUif5YzTH3tqfbIhFLP7VIpcjkDl-Iqhc" alt="Colaborador 5" />  {/* coloca el link de tu foto de perfil */}
                </a> 
                <a href="https://www.linkedin.com/in/yurisay-martinez/" target="_blank">
                    <img src="https://media.licdn.com/dms/image/D4D03AQEs87tKtvqYag/profile-displayphoto-shrink_200_200/0/1692373276885?e=1715817600&v=beta&t=oiPFrHx7Z5FbtIupVNjYRePxlvhMYDxV8mc18b8_D-8" alt="Colaborador 6: Mulher branca aparentemente com 35 anos, com camisa branca, cabelo preto, sorrindo e com pose empoderada. Está em pé em frente a uma cortina bege" />     {/*estructurar tu contenido de forma que sea fácilmente comprensible para los lectores de pantalla. */}
                </a>
            </div>
            
            <div>
        Colaboradores do site - © 2024 <span id="currentYear"></span>
    </div>

        </footer>
    );
}
