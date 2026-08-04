import '../App.css'
import { Link } from 'react-router-dom'

export default function MinasGerais() {
    return(
        <div>
            <h1>Estado de Minas Gerais</h1>
            <div className="conteudo">

            <img src="/MG.png" alt="Minas Gerais" />
            <p>Minas Gerais é um estado brasileiro muito famoso por suas belezas naturais, cidades históricas ricas em cultura e culinária marcante. O território guarda serras imponentes como a da Mantinha e a do Espinhaço, além de vilas coloniais como Ouro Preto e Tiradentes que preservam o estilo barroco com suas ladeiras de pedra e igrejas cobertas de ouro. A hospitalidade do povo mineiro é um traço cultural forte, sempre pronta para receber visitantes com um dedo de prosa e um cafezinho fresco acompanhado de pão de queijo ou doce de leite artesanal. A economia e a história se misturam desde os tempos do ciclo do ouro e dos diamantes até a forte produção leiteira e cafeeira dos dias atuais, fazendo deste estado um dos corações mais vibrantes e tradicionais do país, onde o passado colonial e o jeito simples de viver caminham lado a lado pelas estradas de terra e pelas montanhas verdejantes que cercam cada cantinho dessa terra acolhedora.</p>
            <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}