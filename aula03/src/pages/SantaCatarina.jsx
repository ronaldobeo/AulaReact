import "../App.css";
import { Link } from "react-router-dom";
export default function SantaCatarina() {
    return(
        <div>
            <h1>Estado de Santa Catarina</h1>
            <div className="conteudo">
                <img src="/SC.png" alt="Santa Catarina" />
                <p>Santa Catarina é um estado brasileiro localizado na Região Sul do país, com uma área de cerca de 95,7 mil quilômetros quadrados e uma população de aproximadamente 7,6 milhões de habitantes. Banhado pelo Oceano Atlântico a leste e fazendo fronteira com o Paraná ao norte, o Rio Grande do Sul ao sul e a Argentina a oeste, o estado tem Florianópolis como capital, embora Joinville se destaque como o município mais populoso. O território catarinense é amplamente reconhecido por sua alta qualidade de vida, exibindo excelentes indicadores sociais e um forte dinamismo econômico. A sua história é marcada por uma profunda herança dos povos indígenas originais, seguida por expressivas correntes de imigração europeia, sobretudo açoriana, alemã e italiana, que moldaram a cultura, a arquitetura e as tradições locais, como a famosa Oktoberfest em Blumenau. O relevo é diversificado, alternando entre a planície litorânea recheada de praias paradisíacas, os vales férteis, e os planaltos e serras onde o inverno pode registrar temperaturas negativas e belas paisagens com neve. Economicamente, o estado sobressai-se pela expressiva diversificação produtiva, não dependendo de um único setor, unindo um polo industrial forte — com destaques nos segmentos têxtil, metalmecânico, tecnológico e madeireiro —, uma agropecuária altamente eficiente e uma intensa atividade turística que atrai visitantes de todas as partes do Brasil e do exterior ao longo de todo o ano.</p>
                <p><Link to="/">Voltar</Link></p>
            </div>
        </div>
    )
}