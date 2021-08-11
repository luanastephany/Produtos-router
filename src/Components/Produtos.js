import React, { useEffect, useState } from 'react'
import styles from './Produtos.module.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Produtos = () => {
  const [produtos, setProdutos] = useState(null)

  const loadProdutos = async () => {
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
    const json = await response.json()
    setProdutos(json)
  }

  useEffect(() => {
    loadProdutos()
  }, [])

  if (produtos === null) return null

  return (
    <section className={styles.produtos + " animeLeft"}>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      {produtos.map((produto =>
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt="title" />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos
