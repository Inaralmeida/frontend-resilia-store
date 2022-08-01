import React from 'react'
import S from './CardProduto.module.css'
import { Link } from 'react-router-dom'

const CardProduto = ({ foto, nome, textoBotao, url }) => {
  return (
    <div className={S.card}>
      <img src={foto} alt={nome} />
      <p>{nome}</p>
      <Link className={S.link} to={url}>{textoBotao}</Link>
    </div>
  )
}

export default CardProduto