import React from 'react'
import styles from './Produtos.module.css'
import { Helmet } from 'react-helmet'

const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      <h1>Produtos</h1>
    </div>
  )
}

export default Produtos
