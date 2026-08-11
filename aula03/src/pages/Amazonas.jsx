import "../App.css"
import { Link } from "react-router-dom"
export default function Amazonas() {
    return (
        <div>

            <h1>Estado do Amazonas</h1>
            <div className="conteudo">

                <img src="/AM.png" alt="Amazonas" />
                <p>O Amazonas é o maior estado brasileiro em extensão territorial, localizado na Região Norte do país, com sua capital situada em Manaus. O seu vasto território é coberto em grande parte pela Floresta Amazônica, abrigando uma imensa riqueza de biodiversidade e sendo banhado pelo rio Amazonas, o mais volumoso do planeta. A economia amazonense destaca-se pela forte presença do polo industrial da Zona Franca de Manaus, que impulsiona o setor secundário na capital, enquanto o interior do estado mantém forte ligação com as atividades extrativistas e a preservação dos saberes tradicionais e indígenas.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

