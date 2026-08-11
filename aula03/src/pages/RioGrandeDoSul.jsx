import "../App.css";
import { Link } from "react-router-dom";
export default function RioGrandeDoSul(){
    return(
        <div>
            <h1>Estado do Rio Grande Do Sul</h1>

            <div className="conteudo">
                <img src="/RS.png" alt="Rio Grande do Sul" />
                <p>O Rio Grande do Sul é o estado mais ao sul do Brasil, conhecido por sua rica herança cultural, forte tradição gaúcha e clima subtropical bem definido com invernos frios. A economia gaúcha destaca-se pela agropecuária forte na produção de grãos e carne, além de um setor industrial diversificado na região metropolitana de Porto Alegre e polo coureiro-calçadista. A paisagem do estado varia desde os pampas ondulados até a Serra Gaúcha, famosa por suas cidades de colonização europeia como Gramado e Canela, que atraem turistas do mundo todo. A história regional é marcada por episódios cruciais como a Revolução Farroupilha, moldando uma identidade cultural muito orgulhosa e distinta. Hoje, o território continua a desempenhar um papel vital na geopolítica e na economia do país, unindo belezas naturais como os Cânions de Cambará do Sul e a hospitalidade de seu povo.</p>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}