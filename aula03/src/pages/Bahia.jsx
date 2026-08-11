import "../App.css"
import { Link } from "react-router-dom"
export default function Bahia() {
    return (
        <div>

            <h1>Estado da Bahia</h1>
            <div className="conteudo">

                <img src="/BA.png" alt="Bahia" />
                <p>A Bahia é um dos estados mais ricos e fascinantes do Brasil, localizado na região Nordeste do país. Com uma extensão territorial imensa e a maior faixa litorânea brasileira, o estado se destaca pela forte influência da cultura afro-brasileira, presente na culinária, na música, na religiosidade e nas tradições do seu povo. Salvador, a capital baiana, foi a primeira sede do governo colonial português e guarda um centro histórico mundialmente famoso, o Pelourinho, repleto de casarões coloridos e ladeiras de paralelepípedo. Além da capital, o território baiano abriga belezas naturais muito diversas, divididas em regiões turísticas marcantes. O litoral do estado oferece praias paradisíacas que vão desde a Costa dos Coqueiros até a Costa do Descobrimento, passando por destinos famosos como Itacaré, Porto Seguro e a vila rústica de Trancoso. No interior, a Chapada Diamantina atrai aventureiros do mundo todo com suas trilhas seculares, cachoeiras gigantescas, grutas subterrâneas e paisagens de paredões rochosos impressionantes. O Recôncavo Baiano, ao redor da Baía de Todos-os-Santarém, pulsa com a história da independência do Brasil e com manifestações culturais genuínas como o samba de roda. Já o sertão baiano carrega a força do bioma da caatinga e a resistência de um povo acostumado com o clima semiárido, enquanto o oeste do estado se transformou em uma potência do agronegócio nacional. A economia baiana é dinâmica e une o turismo, a indústria petroquímica no Polo de Camaçari, a agricultura e a pesca artesanal. Receber bem é uma marca registrada do povo baiano, que transforma qualquer encontro em festa embalada pelo som do axé, do pagode ou dos tambores do Olodum. Em suma, a Bahia não é apenas um ponto no mapa geográfico, mas sim a alma viva da identidade cultural do Brasil.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

