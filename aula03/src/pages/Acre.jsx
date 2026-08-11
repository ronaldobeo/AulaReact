import "../App.css"
import { Link } from "react-router-dom"
export default function Acre() {
    return (
        <div>

            <h1>Estado do Acre</h1>
            <div className="conteudo">

                <img src="/AC.png" alt="Acre" />
                <p>O Acre é um estado brasileiro localizado na região Norte, no extremo sudoeste da Amazônia Ocidental, fazendo fronteira com o Peru e a Bolívia, além dos estados de Rondônia e Amazonas. Sua capital é Rio Branco. O território possui uma rica história marcada pelo ciclo da borracha e pela Revolução Acreana, movimento em que seringueiros brasileiros lutaram para anexar a região ao Brasil, o que se oficializou com o Tratado de Petrópolis em 1903. A vegetação predominante é a floresta equatorial, com clima quente e úmido. A economia apoia-se no extrativismo sustentável da castanha e da madeira, na agricultura, na pecuária e no setor de serviços, mantendo grande parte de sua biodiversidade preservada.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

