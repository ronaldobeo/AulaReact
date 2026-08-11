import "../App.css"
import { Link } from "react-router-dom"
export default function Roraima() {
    return (
        <div>

            <h1>Estado de Roraima</h1>
            <div className="conteudo">

                <img src="/ES.png" alt="Espirito Santo" />
                <p>Roraima é o estado mais setentrional do Brasil, localizado no extremo norte da Região Norte, fazendo fronteira com a Venezuela e a Guiana, além dos estados do Pará e Amazonas. É o menos populoso e o menos povoado do país, possuindo apenas 15 municípios, mas abriga uma imensa riqueza cultural e natural. Sua capital, Boa Vista, é a única capital brasileira totalmente situada acima da Linha do Equador e destaca-se pelo seu planejamento urbano em forma de leque. O relevo e a vegetação combinam a imensidão da Floresta Amazônica com extensas áreas de savanas conhecidas como lavrados. A economia roraimense concentra-se fortemente no setor de serviços e no comércio da capital, somando-se ao avanço da agropecuária com a produção de arroz e soja, e ao extrativismo. O estado também guarda tesouros turísticos e geológicos de relevância internacional, como o famoso Monte Roraima, um dos pontos mais antigos e impressionantes do planeta.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}