import "../App.css"
import { Link } from "react-router-dom"
export default function Alagoas() {
    return (
        <div>

            <h1>Estado do Alagoas</h1>
            <div className="conteudo">

                <img src="/AL.png" alt="Alagoas" />
                <p>O estado de Alagoas, localizado na Região Nordeste do Brasil, destaca-se por sua rica cultura, história marcante e belezas naturais deslumbrantes que atraem visitantes do mundo todo. Com uma faixa litorânea famosa por suas águas cristalinas e coqueirais, o território alagoano abriga o aclamado mar de tons esverdeados conhecido como o Caribe brasileiro, especialmente em destinos paradisíacos como as praias de Maragogi, Maceió e a região do litoral sul. Além do turismo de sol e mar, o estado preserva um valioso patrimônio histórico e arquitetônico em cidades seculares como Penedo, banhada pelo Rio São Francisco, e Marechal Deodoro, berço da proclamação da república brasileira. A culinária local é outro grande atrativo, valorizando os frutos do mar e pratos tradicionais à base de mandioca e carne de sol, enquanto o artesanato de filé reflete a identidade e a criatividade do povo alagoano. A economia, historicamente ligada à agricultura da cana-de-açúcar, diversificou-se com o crescimento do setor de serviços e do turismo sustentável. Assim, Alagoas une a simplicidade de suas comunidades pesqueiras com a energia vibrante de sua gente, consolidando-se como um dos destinos mais encantadores e autênticos do país.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

