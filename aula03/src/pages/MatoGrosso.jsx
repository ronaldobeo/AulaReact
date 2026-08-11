import "../App.css"
import { Link } from "react-router-dom"
export default function MatoGrosso() {
    return (
        <div>

            <h1>Estado do Mato Grosso</h1>
            <div className="conteudo">

                <img src="/MT.png" alt="Mato Grosso" />
                <p>O estado de Mato Grosso, localizado na Região Centro-Oeste do Brasil, destaca-se por sua vasta extensão territorial e por abrigar três grandes biomas sul-americanos: a Amazônia ao norte, o Cerrado no centro e leste, e o Pantanal ao sul. Essa rica diversidade ambiental faz da região um santuário de biodiversidade e um polo de ecoturismo, com destinos famosos como Chapada dos Guimarães e o município de Bonito (embora este último fique no Mato Grosso do Sul, o Pantanal mato-grossense possui belezas ímpares em Poconé e Cáceres). A economia do estado é uma das mais fortes do país, impulsionada principalmente pelo agronegócio, sendo a maior produtor nacional de grãos, com destaque absoluto para o cultivo de soja, milho e algodão, além de possuir um expressivo rebanho bovino. A capital, Cuiabá, fundada no século XVIII durante o ciclo do ouro, mescla traços históricos com a modernidade de uma metrópole em constante crescimento, refletindo a cultura vibrante do povo mato-grossense, marcada por influências indígenas, bandeirantes e nordestinas, evidente na culinária com pratos à base de peixes pantaneiros e no ritmo do siriri e do cururu.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}