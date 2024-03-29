import { FooterColab, ColabAppType} from './FooterColab';

import styles from './FooterLink.module.css';

const colabsApp: ColabAppType[] = [
    {
      id: 0,
      title: 'Nadi Duno',
      descrition: 'Mulher parda de cabelo preto, fundo amarelo',
      url: 'https://www.linkedin.com/in/nadiduno/',
      urlphoto: 'https://media.licdn.com/dms/image/D4D35AQGGPqar_zxotg/profile-framedphoto-shrink_200_200/0/1709583111683?e=1712282400&v=beta&t=SvmKnGFpWOc3OtdkcsPG_xUFV1IijHZhNXkeaTKsWc8'
    },
    {
        id: 1,
        title: 'Maoly Lara',
        url: 'https://www.linkedin.com/in/maolylara/',
        urlphoto: 'https://media.licdn.com/dms/image/D4D03AQFxpNQeFmofnw/profile-displayphoto-shrink_200_200/0/1698188040979?e=1715817600&v=beta&t=Jt7znLWjfsUigLdD8-gvMPku1tFXmo5sf1rDPCOT-hs'
      },
      {
        id: 2,
        title: 'Manuel Bernardo',
        url: 'https://www.linkedin.com/in/manuel-bernardo-165373208/',
        urlphoto: 'https://media.licdn.com/dms/image/D4D03AQHu2DVCy1LZsg/profile-displayphoto-shrink_200_200/0/1709568363617?e=1716422400&v=beta&t=B-I0fWlxXal_FcvE1ocE8h0-EWok9mu6EvApLHQmh9g'
      },
      {
        id: 3,
        title: 'Victor Alcala',
        url: 'https://www.linkedin.com/in/alcalamvictor/',
        urlphoto: 'https://media.licdn.com/dms/image/D4D35AQGuQkqdaXo7BQ/profile-framedphoto-shrink_200_200/0/1710717303299?e=1712282400&v=beta&t=dPIzAL0ugfGrM1MCFFCg7iGw5AKQCbIT5G-rr97XBl0'
      },
      {
        id: 4,
        title: 'Yurisay Martinez',
        descrition: 'Mulher branca aparentemente com 35 anos, com camisa branca, cabelo preto, sorrindo e com pose empoderada. Está em pé em frente a uma cortina bege',
        url: 'https://www.linkedin.com/in/yurisay-martinez/',
        urlphoto: 'https://media.licdn.com/dms/image/D4D03AQEs87tKtvqYag/profile-displayphoto-shrink_200_200/0/1692373276885?e=1715817600&v=beta&t=oiPFrHx7Z5FbtIupVNjYRePxlvhMYDxV8mc18b8_D-8'
      }
    
]  
  
export function FooterLink() {
    return (
        <footer className={styles.container}>
            <div className={styles.collaborators}> 
                {colabsApp.map((colabApp) => {
                        return <FooterColab key={colabApp.id} colabApp={colabApp} />
                })}
            </div>    
            <div className={styles.spacefont}>
                <p>Colaboradores do site - © 2024</p> 
                <p className={styles.pipespan}></p>
                <p>Embaixadores da <a href="https://totidiversidade.com.br/" target="_blank" className={styles.fontlink}>Toti Diversidade</a></p> 
            </div>

        </footer>
    );
}