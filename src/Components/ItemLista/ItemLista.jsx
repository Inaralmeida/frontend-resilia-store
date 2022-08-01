import React from 'react'
import S from './ItemLista.module.css'

const ItemLista = ({ produto }) => {
  return (
    <div className={S.container}>
      <article className={S.name}>
        <small>Nome</small>
        <p className={S.text}>{produto.nome_abreviado}</p>
      </article>
      <article className={S.preco}>
        <small>Preço</small>
        <p className={S.text}>R$ {produto.preco}</p>
      </article>
      <article className={S.categoria}>
        <small>Categoria</small>
        <p className={S.text}>{produto.categoria}</p>
      </article>
      <button>Editar</button>
    </div>
  )
}

export default ItemLista