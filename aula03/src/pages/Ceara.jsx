import "../App.css"
import { Link } from "react-router-dom"
export default function Ceara() {
    return (
        <div>

            <h1>Estado do Ceará</h1>
            <div className="conteudo">

                <img src="/CE.png" alt="Ceará" />
                <p>O estado do Ceará, localizado na Região Nordeste do Brasil, destaca-se por sua rica herança cultural, belas paisagens litorâneas e forte economia regional. Com uma extensão territorial de mais de 148 mil quilômetros quadrados, o território cearense faz divisa com o Oceano Atlântico ao norte, o Rio Grande do Norte e a Paraíba a leste, Pernambuco ao sul e o Piauí a oeste. Sua capital, Fortaleza, é a cidade mais populosa e o principal polo econômico, turístico e de transporte do estado, reunindo uma vibrante vida urbana junto a praias famosas. A paisagem do Ceará é diversificada, dividindo-se entre a faixa litorânea repleta de dunas e falésias, a zona de transição e o interior marcado pelo semi-árido do sertão, onde se erguem maciços úmidos como a Serra de Baturité e a Serra da Ibiapaba, que oferecem um clima mais ameno e vegetação verdejante. A economia cearense evoluiu bastante ao longo das décadas, impulsionada pelo turismo de massa e ecológico em destinos como Jericoacoara e Canoa Quebrada, pelo setor de serviços, pelas indústrias de confecção e calçados, e pela agricultura irrigada em vales como o do Jaguaribe. Na cultura, o Ceará é um celeiro de grandes humoristas, poetas, músicos e escritores que moldaram a identidade nacional, além de preservar tradições populares marcantes como o forró, a literatura de cordel e o artesanato em renda de bilro. O povo cearense, conhecido por sua alegria e hospitalidade, mantém viva uma forte ligação com o mar e com a terra, fazendo do estado um dos destinos mais fascinantes e culturalmente autênticos do país.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

