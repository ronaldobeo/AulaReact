import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SaoPaulo from './pages/SaoPaulo';
import MinasGerais from './pages/MinasGerais';
import RioJaneiro from './pages/RioJaneiro';
import EspiritoSanto from './pages/EspiritoSanto';


export default function App() {

  return (

      <BrowserRouter>
        <Routes>


          <Route path='/' element={<Home />}/>
          <Route path='/sao-paulo' element={<SaoPaulo/>} />
          <Route path='/minas-gerais' element={<MinasGerais/>}  />
          <Route path='/rio-de-janeiro' element={<RioJaneiro/>} />
          <Route path='/espirito-santo' element={<EspiritoSanto/>}  />


        </Routes>


      </BrowserRouter>

  )
}