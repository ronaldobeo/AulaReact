import "../App.css"
import { Link } from "react-router-dom"
export default function Tocantins() {
    return (
        <div>

            <h1>Estado do Tocantins</h1>
            <div className="conteudo">

                <img src="/TO.png" alt="Tocantins" />
                <p>O estado do Tocantins, localizado na região Norte do país, é o mais jovem do Brasil, criado oficialmente em 1988 após a divisão do estado de Goiás. Sua capital, Palmas, é uma cidade planejada que se destaca pelas ruas largas e pela bela vista da Praia da Graciosa banhada pelo lago da Usina Hidrelétrica de Luís Eduardo Magalhães. O território tocantinense abriga uma rica transição entre a Amazônia e o Cerrado, o que proporciona paisagens naturais impressionantes e uma biodiversidade única. Entre os principais atrativos turísticos está o Parque Estadual do Jalapão, famoso mundialmente por suas dunas douradas, fervedouros de água cristalina, chapadões e cachoeiras exuberantes como a da Velha. Além disso, a Ilha do Bananal, considerada a maior fluvial do mundo, protege uma fauna rica e abriga reservas indígenas importantes. A economia do estado tem forte base na agropecuária, com expressiva produção de grãos como soja e milho, aliada a um turismo ecológico em constante crescimento que atrai visitantes de várias partes do planeta em busca de aventura e contato direto com a natureza rústica e preservada do Brasil central.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}