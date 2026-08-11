import { Link } from "react-router-dom";

import "../App.css";

export default function Home() {
    return (
        <div>
            <h1>Aula03 - Estudos de Rotas</h1>
            <div className="conteudo">
                <h3>Norte</h3>
                <ul>
                    <li><Link to="/estados/acre">Acre</Link></li>
                    <li><Link to="/estados/amapa">Amapá</Link></li>
                    <li><Link to="/estados/amazonas">Amazonas</Link></li>
                    <li><Link to="/estados/para">Pará</Link></li>
                    <li><Link to="/estados/rondonia">Rondônia</Link></li>
                    <li><Link to="/estados/roraima">Roraima</Link></li>
                    <li><Link to="/estados/tocantins">Tocantins</Link></li>
                </ul>
            </div>

            <div className="conteudo">
                <h3>Nordeste</h3>
                <ul>
                    <li><Link to="/estados/alagoas">Alagoas</Link></li>
                    <li><Link to="/estados/bahia">Bahia</Link></li>
                    <li><Link to="/estados/ceara">Ceará</Link></li>
                    <li><Link to="/estados/maranhao">Maranhão</Link></li>
                    <li><Link to="/estados/paraiba">Paraíba</Link></li>
                    <li><Link to="/estados/pernambuco">Pernambuco</Link></li>
                    <li><Link to="/estados/piaui">Piauí</Link></li>
                    <li><Link to="/estados/rio-grande-do-norte">Rio Grande do Norte</Link></li>
                    <li><Link to="/estados/sergipe">Sergipe</Link></li>
                </ul>
            </div>

            <div className="conteudo">
                <h3>Centro-Oeste</h3>
                <ul>
                    <li><Link to="/estados/distrito-federal">Distrito Federal</Link></li>
                    <li><Link to="/estados/goias">Goiás</Link></li>
                    <li><Link to="/estados/mato-grosso">Mato Grosso</Link></li>
                    <li><Link to="/estados/mato-grosso-do-sul">Mato Grosso do Sul</Link></li>
                </ul>
            </div>

            <div className="conteudo">
                <h3>Sudeste</h3>
                <ul>
                    <li><Link to="/estados/espirito-santo">Espírito Santo</Link></li>
                    <li><Link to="/estados/minas-gerais">Minas Gerais</Link></li>
                    <li><Link to="/estados/rio-de-janeiro">Rio de Janeiro</Link></li>
                    <li><Link to="/estados/sao-paulo">São Paulo</Link></li>
                </ul>
            </div>

            <div className="conteudo">
                <h3>Sul</h3>
                <ul>
                    <li><Link to="/estados/parana">Paraná</Link></li>
                    <li><Link to="/estados/rio-grande-do-sul">Rio Grande do Sul</Link></li>
                    <li><Link to="/estados/santa-catarina">Santa Catarina</Link></li>
                </ul>
            </div>
        </div>
    )
}