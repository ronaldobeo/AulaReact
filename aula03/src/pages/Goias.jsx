import "../App.css"
import { Link } from "react-router-dom"
export default function Goias() {
    return (
        <div>

            <h1>Estado de Goiás</h1>
            <div className="conteudo">

                <img src="/GO.png" alt="Goiás" />
                <p>O estado de Goiás fica na região Centro-Oeste do Brasil e tem Goiânia como sua capital. A região destaca-se pela forte produção agropecuária, sendo um dos maiores produtores de grãos e carne do país. Além disso, abriga o famoso Parque Nacional da Chapada dos Veadeiros, que atrai muitos turistas por causa de suas belas cachoeiras e paisagens naturais do Cerrado. Outro ponto muito visitado é a cidade histórica de Pirenópolis, famosa por suas ruas de pedra e festas tradicionais. A economia goiana também cresce com a indústria e a mineração, enquanto a cultura local mistura a vida caipira com o ritmo sertanejo.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}