import "../App.css"
import { Link } from "react-router-dom"

export default function Parana() {
    return (
        <div>
            <h1>Estado do Paraná</h1>
            <div className="conteudo">

                <img src="/PR.png" alt="Paraná" />
                <p>O estado do Paraná, localizado na Região Sul do Brasil, destaca-se pela rica diversidade geográfica, cultural e econômica. Sua capital, Curitiba, é reconhecida nacional e internacionalmente pelo planejamento urbano eficiente, inovação em transporte público e abundância de áreas verdes. A história paranaense foi profundamente moldada pela exploração da erva-mate e da madeira no passado, além da expressiva imigração europeia e japonesa que deixou marcas visíveis na arquitetura, nas tradições e na culinária local. No cenário econômico, o estado brilha como um dos gigantes do agronegócio brasileiro, sendo um grande produtor de grãos como soja e milho, além de possuir um setor industrial forte concentrado em regiões como a Grande Curitiba e o polo automotivo e agrícola do interior. Em termos naturais e turísticos, o Paraná abriga tesouros espetaculares de projeção mundial, com destaque para as Cataratas do Iguaçu, na fronteira com a Argentina, e o Parque Nacional do Iguaçu, que atraem milhões de visitantes todos os anos. Outros pontos de relevância geográfica incluem o relevo do Segundo e Terceiro Planaltos, a imponência da Serra do Mar e o litoral com praias muito procuradas por turistas sul-americanos. Desse modo, o Paraná equilibra perfeitamente o desenvolvimento urbano sustentável com a força do campo e a preservação de suas belezas naturais.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>



        </div>
    )
}