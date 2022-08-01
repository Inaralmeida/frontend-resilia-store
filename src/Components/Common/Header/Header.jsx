import React from 'react'
import S from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={S.header}>
      <Link className='titulo' to='/'>Resilia Store</Link>
      <nav>
        <Link className='subtitulo' to='/produtos/notebooks' >Notebook</Link>
        <Link className='subtitulo' to='/produtos/monitores' >Monitor</Link>
        <Link className='subtitulo' to='/produtos/acessorios' >Acessórios</Link>
        <Link className='subtitulo' to='/administrador' >Administrador</Link>
      </nav>
    </header>
  )
}

export default Header