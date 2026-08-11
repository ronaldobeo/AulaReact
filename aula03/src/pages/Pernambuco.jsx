import "../App.css"
import { Link } from "react-router-dom"
export default function Pernambuco() {
    return (
        <div>

            <h1>Estado do Pernambuco</h1>
            <div className="conteudo">

                <img src="/PE.png" alt="Pernambuco" />
                <p>Pernambuco é um estado brasileiro localizado na região Nordeste, famoso por sua rica história, forte identidade cultural e belas paisagens litorâneas. Sua capital, Recife, destaca-se pela arquitetura colonial e pelos canais que lembram a Europa, enquanto a cidade histórica de Olinda, vizinha à capital, encanta com suas ladeiras coloridas e o famoso carnaval de bonecos gigantes. No interior, o sertão guarda a cultura vaqueira e a mística de cidades como Caruaru, conhecida pelo seu grande mercado de artesanato e pelas festas juninas. O litoral pernambucano também abriga um dos paraísos ecológicos mais importantes do mundo, o arquipélago de Fernando de Noronha, além de praias paradisíacas como Porto de Galinhas. A economia do estado é diversa, unindo o turismo, a agroindústria canavieira, o polo médico e o polo industrial de Suape. A culinária local é outro grande atrativo, misturando sabores marcantes em pratos como o bolo de rolo, a tapioca, o arrumadinho e iguarias à base de frutos do mar.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

