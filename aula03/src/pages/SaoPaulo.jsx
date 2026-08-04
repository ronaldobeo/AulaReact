import { Link } from "react-router-dom";
import '../App.css';
export default function SaoPaulo() {
    return (
        <div>
            <h1>Estado de São Paulo</h1>
            <div className="conteudo">
                <img src="/SP.png" alt="São Paulo" />
                <p>São Paulo é a maior cidade do Brasil, famosa por sua vida agitada, trânsito intenso e pela grande mistura de culturas do mundo todo. A cidade nunca para de crescer e abriga milhões de pessoas que correm todos os dias para trabalhar e estudar em meio a imensos prédios de cimento, ruas movimentadas e avenidas gigantescas como a famosa Avenida Paulista, que reúne arte, negócios e lazer no mesmo lugar. Por lá, o clima muda rápido, o comércio funciona até tarde da noite e a oferta de restaurantes com pratos de várias regiões e países é gigantesca, mostrando que o lugar acolhe gente de todos os cantos. Além da correria, há espaços verdes como o Parque Ibirapuera para relaxar, museus ricos em história e bairros tradicionais como a Liberdade e o Bixiga, que guardam memórias e festas cheias de cor e sabor, formando um retrato único de diversidade urbana.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}