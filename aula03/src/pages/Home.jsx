import { Link } from "react-router-dom";

import "../App.css";

export default function Home() {
    return (
        <div>
            <h1>Aula03 - Estudos de Rotas</h1>
            <div className="conteudo">
                <ul>
                    <li><Link to='/estados/sao-paulo'>São Paulo</Link></li>
                    <li><Link to='/estados/rio-de-janeiro'>Rio de Janeiro</Link></li>
                    <li><Link to='/estados/minas-gerais'>Minas Gerais</Link></li>
                    <li><Link to='/estados/espirito-santo'>Espírito Santo</Link></li>
                </ul>
            </div>
        </div>
    )
}