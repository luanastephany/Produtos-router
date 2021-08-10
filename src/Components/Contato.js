import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import { Helmet } from 'react-helmet'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Helmet>
        <title>Contato</title>
      </Helmet>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>contato@contato.com</li>
          <li>(xx) 99999-9999</li>
        </ul>
      </div>

    </section>
  )
}

export default Contato
