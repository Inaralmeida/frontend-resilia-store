import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Header from '../Components/Common/Header/Header'
import Administrador from '../pages/Administrador/Administrador'
import Home from '../pages/Home/Home'
import ProdutoIndividual from '../pages/ProdutoIndividual/ProdutoIndividual'
import Produtos from '../pages/Produtos/Produtos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/produtos/:categoria' element={<Produtos />} />
        <Route path='/produto/:id' element={<ProdutoIndividual />} />
        <Route path='/administrador' element={<Administrador />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes