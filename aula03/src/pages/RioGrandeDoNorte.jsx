import "../App.css"
import { Link } from "react-router-dom"
export default function RioGrandeDoNorte() {
    return (
        <div>

            <h1>Estado do Rio Grande do Norte</h1>
            <div className="conteudo">

                <img src="/RN.png" alt="Rio Grande Do Norte" />
                <p>O Rio Grande do Norte é um estado brasileiro situado na região Nordeste, famoso por suas belas praias e sol quase o ano todo. Sua capital é Natal, conhecida como a "Cidade do Sol" e famosa pelo Forte dos Reis Magos e pelas dunas de Genipabu. O litoral norte e sul guarda tesouros como Pipa e Maracajaú, atraindo turistas de todo o mundo. No interior, o clima semiárido marca a região do Seridó, onde a cultura e a culinária sertaneja se destacam com pratos à base de carne de sol e queijo de coalho. A economia estadual baseia-se no turismo, na extração de petróleo, na produção de sal marinho e na fruticultura irrigada. O povo potiguar é conhecido por sua alegria e hospitalidade, fazendo do estado um ponto de grande importância cultural e histórica para o país.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}