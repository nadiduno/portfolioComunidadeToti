import React, { useEffect, useState } from 'react';

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

    return(
        
        <div className={`${styles.wrap} ${showLogos ? styles.show : ''}`}>
      {logos.map((logo, index) => (
        <img key={index} className={styles.logos} src={logo} alt={`Logo ${index}`} />
      ))}
    </div>

    )
}