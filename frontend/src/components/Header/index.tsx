import React from 'react';
import icon from '../../assets/img/image 1.svg';
import './styles.css';

export default function Header() {
  return (
    <header>
        <div className='dsmeta-logo-container'>
            <img src={icon} alt="header"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/afranioz-analista-sistemas/">@afraniozsilva.in</a></p>
        </div>
    </header>
  )
}
