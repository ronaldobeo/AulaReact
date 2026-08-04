import "../App.css"
import { Link } from "react-router-dom"
export default function EspiritoSanto() {
    return(
        <div>

            <h1>Estado do Espírito Santo</h1>
            <div className="conteudo">

            <img src="/ES.png" alt="Espirito Santo" />
            <p>O estado do Espírito Santo fica na região Sudeste do Brasil e tem uma faixa de terra bonita que vai do mar até as serras do interior. Quem nasce lá é chamado de capixaba, nome que vem de uma palavra antiga dos índios para falar de suas roças de milho e mandioca. A história de gente de fora naquela terra começou no dia 23 de maio de 1535, quando o navegador Vasco Fernandes Coutinho chegou na praia de Vila Velha e deu o nome de Espírito Santo por causa de uma festa da igreja que acontecia naquela semana. Com o tempo, o lugar cresceu e recebeu muita gente de outros países, como italianos e alemães que vieram trabalhar nas fazendas de café. A terra tem montanhas altas, como o Pico da Bandeira que é um dos maiores do país, e também praias muito bonitas e tranquilas ao longo de centenas de quilômetros de litoral. Na comida, o prato mais famoso é a moqueca capixaba, que é bem diferente da de outros lugares porque não leva azeite de dendê e é feita de um jeito bem especial na panela de barro, que as índias e paneleiras de Vitória sabem fazer muito bem. O estado é calmo, tem cidades limpas com boa qualidade de vida e guarda tesouros lindos no mapa do Brasil.</p>
            <p><Link to='/'>Voltar</Link></p>
            </div>
       </div>
    )
}