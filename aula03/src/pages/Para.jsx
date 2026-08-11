import "../App.css"
import { Link } from "react-router-dom"
export default function Para() {
    return (
        <div>

            <h1>Estado do Pará</h1>
            <div className="conteudo">

                <img src="/PA.png" alt="Pará" />
                <p>O Pará é o segundo maior estado brasileiro em extensão territorial e o mais populoso da Região Norte, tendo Belém como sua capital. Situado no coração da floresta amazônica, o território paraense é banhado por uma vasta rede de rios caudalosos, com destaque para o imponente Rio Amazonas. A culinária local é uma das mais ricas e famosas do país, unindo influências indígenas, portuguesas e africanas em pratos típicos como o pato no tucupi, o tacacá e o consumo diário do açaí com peixe ou farinha. A cultura respira tradições seculares, expressas no ritmo envolvente do carimbó e na grandiosidade do Círio de Nazaré, uma das maiores festas religiosas do mundo. Além de sua imenseprice natural e cultural, o estado possui uma economia forte baseada na extração mineral, na agropecuária e na biodiversidade da floresta, desempenhando um papel fundamental para o equilíbrio ambiental e o desenvolvimento econômico de todo o norte do Brasil.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}