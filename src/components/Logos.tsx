/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';

import logopython from '../assets/logoPython.svg';
import logosql from '../assets/logoSQL.svg';
import logojupyter from '../assets/logoJupyter.svg';
import logopowerbi from '../assets/logoPowerBI.svg';

import styles from './Logos.module.css'

const logos: string[] = [logopython, logosql, logojupyter, logopowerbi];
  

export function Logos ()  {

  const [showLogos, setShowLogos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogos(true);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);


  const extractLogoName = (path: string) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const name = filename.split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1); 
  };  
  
  return(   
    <div className={`${styles.wrap} ${showLogos ? styles.show : ''}`}>
        {logos.map((logo, index) => (
        <img key={index} className={`${styles.logos} ${showLogos ? styles.show : ''}`} src={logo} alt={extractLogoName(logo)} title={extractLogoName(logo)} />
      ))}
    </div>

    )
}