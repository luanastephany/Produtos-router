import React, { useEffect, useState } from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'

const Produto = () => {
  const [produto, setProduto] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch (erro) {
        setError('Um erro ocorreu')
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (error) return <p>{error}</p>
  if (produto === null) return null

  return (
    <section className={styles.produto}>
      <div>

      </div>
      <h1>Produto</h1>
    </section>
  )
}

export default Produto
