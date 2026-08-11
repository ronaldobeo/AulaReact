import "../App.css"
import { Link } from "react-router-dom"
export default function Sergipe() {
    return (
        <div>

            <h1>Estado de Sergipe</h1>
            <div className="conteudo">

                <img src="/SE.png" alt="Sergipe" />
                <p>O estado de Sergipe, localizado na região Nordeste do Brasil, é o menor estado em extensão territorial do país, mas surpreende pela riqueza de sua cultura e pela beleza de suas paisagens. Banhado pelo Oceano Atlântico, o litoral sergipano abriga praias de águas mornas e calmas, como a famosa Praia de Atalaia em Aracaju, a capital estadual, que se destaca pela organização urbana, limpeza e pela vibrante Passarela do Cariri, um polo de culinária típica e artesanato local. O interior do estado guarda tesouros históricos e naturais de grande valor, a exemplo da cidade de São Cristóvão, fundada no século XVI e detentora da Praça São Francisco, reconhecida como Patrimônio Mundial da Humanidade pela UNESCO. Outro grande destaque geográfico e turístico é o Rio São Francisco, o Velho Chico, que marca a divisa norte do estado e oferece passeios inesquecíveis pelos Cânions do Xingô, onde paredões rochosos monumentais cercam as águas profundas e cristalinas no município de Canindé de São Francisco. A culinária local é um verdadeiro convite aos sabores nordestinos, com forte presença de pratos à base de peixes e crustáceos, além do tradicional caranguejo que é saboreado em encontros de fim de semana pela população e pelos visitantes. A economia do estado, historicamente ligada à agropecuária, com destaque para a produção de coco e laranja, e à extração de petróleo e gás, também encontra no turismo e no comércio importantes pilares de desenvolvimento. O povo sergipano é conhecido por sua hospitalidade e alegria, mantendo vivas manifestações folclóricas únicas como o amaro, o reisado e as festas juninas que transformam o estado em um dos principais destinos do país durante o mês de junho, celebrando o São João com muito forró pé de serra e cores. Assim, Sergipe se revela como um destino acolhedor e surpreendente, onde a tradição e a modernidade caminham juntas à beira do rio e do mar.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}