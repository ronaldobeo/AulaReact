import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SaoPaulo from './pages/SaoPaulo';
import MinasGerais from './pages/MinasGerais';
import RioJaneiro from './pages/RioJaneiro';
import EspiritoSanto from './pages/EspiritoSanto';
import Parana from './pages/Parana';
import MatoGrosso from './pages/MatoGrosso';
import MatoGrossoDoSul from './pages/MatoGrossoDoSul';
import Goias from './pages/Goias';
import Paraiba from './pages/Paraiba';
import Tocantins from './pages/Tocantins';
import Acre from './pages/Acre';
import SantaCatarina from './pages/SantaCatarina';
import Roraima from './pages/Roraima';
import Rondonia from './pages/Rondonia';
import Piaui from './pages/Piaui';
import Pernambuco from './pages/Pernambuco';
import Para from './pages/Para';
import RioGrandeDoSul from './pages/RioGrandeDoSul';
import RioGrandeDoNorte from './pages/RioGrandeDoNorte';
import Maranhao from './pages/Maranhao';
import DistritoFederal from './pages/DestritoFederal';
import Bahia from './pages/Bahia';
import Amazonas from './pages/Amazonas';
import Amapa from './pages/Amapa';
import Alagoas from './pages/Alagoas';
import Ceara from './pages/Ceara';
import Sergipe from './pages/Sergipe';

export default function App() {

  return (

    <BrowserRouter>
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/estados/sao-paulo' element={<SaoPaulo />} />
        <Route path='/estados/minas-gerais' element={<MinasGerais />} />
        <Route path='/estados/rio-de-janeiro' element={<RioJaneiro />} />
        <Route path='/estados/espirito-santo' element={<EspiritoSanto />} />
        <Route path='/estados/parana' element={<Parana />} />
        <Route path='/estados/mato-grosso' element={<MatoGrosso />} />
        <Route path='/estados/mato-grosso-do-sul' element={<MatoGrossoDoSul />} />
        <Route path='/estados/goias' element={<Goias />} />
        <Route path='/estados/paraiba' element={<Paraiba />} />
        <Route path='/estados/tocantins' element={<Tocantins />} />
        <Route path='/estados/acre' element={<Acre />} />
        <Route path='/estados/santa-catarina' element={<SantaCatarina />} />
        <Route path='/estados/roraima' element={<Roraima />} />
        <Route path='/estados/sergipe' element={<Sergipe />} />
        <Route path='/estados/rondonia' element={<Rondonia />} />
        <Route path='/estados/piaui' element={<Piaui />} />
        <Route path='/estados/pernambuco' element={<Pernambuco />} />
        <Route path='/estados/para' element={<Para />} />
        <Route path='/estados/rio-grande-do-sul' element={<RioGrandeDoSul />} />
        <Route path='/estados/rio-grande-do-norte' element={<RioGrandeDoNorte />} />
        <Route path='/estados/maranhao' element={<Maranhao />} />
        <Route path='/estados/distrito-federal' element={<DistritoFederal />} />
        <Route path='/estados/bahia' element={<Bahia />} />
        <Route path='/estados/amazonas' element={<Amazonas />} />
        <Route path='/estados/amapa' element={<Amapa />} />
        <Route path='/estados/alagoas' element={<Alagoas />} />
        <Route path='/estados/ceara' element={<Ceara />} />


      </Routes>


    </BrowserRouter>

  )
}