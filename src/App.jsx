import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Chisiamo' element={<ChiSiamo/>}/>
          <Route path='/Prodotti' element={<Prodotti/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
