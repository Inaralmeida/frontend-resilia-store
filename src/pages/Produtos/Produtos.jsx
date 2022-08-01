import React, { useState } from 'react'
import S from './Produtos.module.css'
import { useParams } from 'react-router-dom'
import { getProdutos, getProdutosCategoria } from '../../services/api'
import { useEffect } from 'react'
import CardProduto from '../../Components/Common/CardProduto/CardProduto'

const Produtos = () => {
  const params = useParams()
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const request = async () => {
      const response = await getProdutosCategoria(params.categoria)
      setProdutos(response)
    }
    request()
  }, [params.categoria])
  return (
    <div className={S.container}>
      <h2>{params.categoria}</h2>
      <section className={S.produtos}>

        {!!produtos && produtos.map(produto => {
          return (<CardProduto
            nome={produto.nome_abreviado}
            foto={produto.url}
            textoBotao='Comprar'
            url={`/produto/${produto.id}`}
            key={produto.id} />)
        })}
      </section>
    </div>
  )
}

export default Produtos