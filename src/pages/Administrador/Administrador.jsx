import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemLista from '../../Components/ItemLista/ItemLista'
import { getProdutos } from '../../services/api'
import S from './Administrador.module.css'

const Administrador = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const request = async () => {
      const response = await getProdutos()
      setProdutos(response)
    }
    request()
  }, [])

  return (
    <div className={S.container}>
      <h2>Produtos</h2>

      <section>

      </section>

      <section className={S.lista}>
        {!!produtos && produtos.map(produto => {
          return (<ItemLista produto={produto} key={produto.id} />)
        })}
      </section>
    </div>
  )
}

export default Administrador