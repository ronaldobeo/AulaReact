import "../App.css"
import { Link } from "react-router-dom"
export default function Amapa() {
    return (
        <div>

            <h1>Estado do Espírito Santo</h1>
            <div className="conteudo">

                <img src="/ES.png" alt="Espirito Santo" />
                <p>
                    O Amapá é um estado brasileiro situado no extremo nordeste da Região Norte do país, com uma área de aproximadamente 142.828 quilômetros quadrados. Limitado pelo estado do Pará ao sul e a oeste, pela Guiana Francesa ao norte, pelo Suriname a noroeste e banhado pelo Oceano Atlântico e pela foz do Rio Amazonas a leste, o território amapaense destaca-se por sua marcante singularidade geográfica e por ser o estado mais isolado do Brasil por vias terrestres, já que nenhuma rodovia o conecta diretamente ao restante do país, restando o acesso principal por avião ou barcos que cruzam os rios e o mar. Sua história é marcada por forte preservação ambiental e por uma evolução política recente, tendo sido transformado em território federal em 1943 e elevado à categoria de estado apenas em 1988, com a promulgação da atual Constituição Federal. A capital amapaense é a cidade de Macapá, famosa por ser cortada exatamente pela Linha do Equador, o que faz com que o monumento do Marco Zero divida os hemisférios norte e sul do planeta. Além disso, mais de 70% da extensão territorial do estado é coberta por densas florestas amazônicas e abriga imensas áreas de preservação e terras indígenas, como o Parque Nacional das Montanhas do Tumucumaque, tornando-o um verdadeiro santuário ecológico e um dos locais com a natureza mais intacta do Brasil. A cultura local pulsa fortemente através de manifestações tradicionais como o Marabaixo, herança de resistência e identidade negra, enquanto a economia se apoia no extrativismo sustentável, na pesca e em atividades primárias, consolidando uma identidade única que mescla as riquezas da floresta, a imensidão das águas amazônicas e a herança cultural dos povos que formam a gente amapaense.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

