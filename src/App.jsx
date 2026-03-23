import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import SingleProduct from './pages/SingleProduct'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chisiamo' element={<ChiSiamo/>}/>
          <Route path='/prodotti' element={<Prodotti/>}/>
          <Route path='/prodotti/:id' element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
