import "../App.css"
import { Link } from "react-router-dom"
export default function MatoGrossoDoSul() {
    return (
        <div>

            <h1>Estado do Mato Grosso do Sul</h1>
            <div className="conteudo">

                <img src="/ES.png" alt="Mato Grosso do Sul" />
                <p>O estado de Mato Grosso do Sul, localizado na região Centro-Oeste do Brasil, destaca-se por sua rica biodiversidade e forte economia voltada para o agronegócio. Criado em 1977 após a divisão do antigo estado de Mato Grosso, o território sul-matogrossense abriga o famoso Pantanal, uma das maiores planícies alagadas do mundo e um santuário ecológico de inestimável valor. Além do ecoturismo focado na observação de fauna e flora em municípios como Bonito e Corumbá, a região apresenta relevo predominantemente plano e planaltos suavemente ondulados. A capital, Campo Grande, concentra importantes polos de serviços e infraestrutura, enquanto a economia estadual prospera com a produção expressiva de grãos, como soja e milho, e a pecuária bovina de corte. Com uma cultura marcada por influências paraguaias e fronteiriças, que se refletem na culinária e na música regional como o ritmo do chamamé e da polca paraguaia, o estado também se apoia no desenvolvimento industrial e na expansão da celulose.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}