/* eslint-disable react/react-in-jsx-scope */
import { FooterColab, ColabAppType} from './FooterColab';

import styles from './FooterLink.module.css';

const colabsApp: ColabAppType[] = [
    {
      id: 0,
      title: 'Nadi Duno',
      descrition: 'Mulher parda aparentemente de 40 anos, camisa branca, cabelo preto, fundo amarelo',
      url: 'https://www.linkedin.com/in/nadiduno/',
      urlphoto: 'https://github.com/nadiduno.png'
    },
    {
        id: 1,
        title: 'Maoly Lara',
        descrition: 'Mulher branca aparentemente de 40 anos, camisa branca e casaco, cabelo ruivo, fundo de cidade',
        url: 'https://www.linkedin.com/in/maolylara/',
        urlphoto: 'https://github.com/MaolyDevTech.png'
      },
      {
        id: 2,
        title: 'Manuel Bernardo',
        descrition: 'Homem preto com tom de pele marrom aparentemente 25 anos de idade, camisa branca, cabelos crespo preto, fundo branco e castanho',
        url: 'https://www.linkedin.com/in/manuel-bernardo-165373208/',
        urlphoto: 'https://github.com/ManueBernardo.png'
      },
      {
        id: 3,
        title: 'Victor Alcala',
        descrition: 'Homem pardo aparentemente de 20 anos, camisa preta, cabelo preto, fone de ouvido, fundo brano',
        url: 'https://www.linkedin.com/in/alcalamvictor/',
        urlphoto: 'https://github.com/VictorAlcala0111.png'
      },
      {
        id: 4,
        title: 'Yurisay Martinez',
        descrition: 'Mulher branca aparentemente com 35 anos, com camisa preta, cabelo preto, sorrindo e com pose empoderada. No fundo um morro',
        url: 'https://www.linkedin.com/in/yurisay-martinez/',
        urlphoto: 'https://github.com/yurisaym.png'
      }
    
]  
  
export function FooterLink() {
    return (
          <footer className={styles.container}>
            <div className={styles.collaborators}>
                {colabsApp.map((colabApp) => (
                    <div key={colabApp.id} className={styles.collaboratorscenter}>
                        <FooterColab colabApp={colabApp} />
                    </div>
                ))}
            </div>
            <div className={styles.spacefont}>
                <p>Colaboradores do site - © 2024</p>
                <p className={styles.pipespan}></p>
                <p>Embaixadores da <a href="https://totidiversidade.com.br/" target="_blank" rel="noopener noreferrer" className={styles.fontlink}>Toti Diversidade</a></p>
            </div>
          </footer>
    );
}