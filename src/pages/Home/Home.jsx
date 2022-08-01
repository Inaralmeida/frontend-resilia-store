import React from 'react'
import S from './Home.module.css'
import bannerHome from '../../images/BANNER-HOME.png'
import CardProduto from '../../Components/Common/CardProduto/CardProduto'
import fotoNotebook from '../../images/notebook.png'
import fotoMonitor from '../../images/monitor.png'
import fotoAcessorio from '../../images/acessorio.png'

const Home = () => {
  return (
    <div className={S.container}>
      <section className={S.sectionDireita} >

        <div className={S.banner}>
          <h2>TECNOLOGIA E</h2>
          <h2>INFORMAÇÃO</h2>
          <h3>TUDO NA PALMA DA SUA MÃO</h3>
        </div>

        <div className={S.cards}>

          <CardProduto nome='Notebooks'
            textoBotao='Ver produtos'
            foto={fotoNotebook}
            url='/produtos/notebooks' />

          <CardProduto nome='Monitores'
            textoBotao='Ver produtos'
            foto={fotoMonitor}
            url='/produtos/monitores' />

          <CardProduto nome='Acessórios'
            textoBotao='Ver produtos'
            foto={fotoAcessorio}
            url='/produtos/acessorios' />

        </div>
      </section>
      <figure className={S.figure}>
        <img src={bannerHome} alt="" />
      </figure>
    </div>
  )
}

export default Home