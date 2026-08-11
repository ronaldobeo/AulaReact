import "../App.css"
import { Link } from "react-router-dom"
export default function Paraiba() {
    return (
        <div>

            <h1>Estado da Paraíba</h1>
            <div className="conteudo">

                <img src="/PB.png" alt="Paraíba" />
                <p>A Paraíba é um estado brasileiro da Região Nordeste, com sua capital na charmosa e verde cidade de João Pessoa, famosa por abrigar a Ponta do Seixas, o ponto mais oriental das Américas, onde o sol nasce primeiro.O território paraibano possui uma área de pouco mais de 56 mil quilômetros quadrados e faz divisa com o Rio Grande do Norte ao norte, Pernambuco ao sul, o Ceará a oeste e o Oceano Atlântico a leste. A geografia do estado é marcada por uma rica diversidade de paisagens que se dividem entre a planície litorânea, o Agreste e o interior dominado pelo Sertão e pelo clima semiárido. Com uma população que ultrapassa os 4 milhões de habitantes, espalhados por 223 municípios, a Paraíba destaca-se tanto pela tranquilidade de suas praias urbanas e falésias quanto pela força cultural de seu interior, onde acontece o maior São João do mundo na cidade de Campina Grande. A economia estadual apoia-se fortemente no setor de comércio e serviços, além de contar com um turismo cada vez mais estruturado, uma agricultura voltada para o cultivo de cana-de-açúcar, abacaxi e milho, e polos tecnológicos importantes que impulsionam o desenvolvimento regional. A herança histórica colonial, visível nos casarões e igrejas barrocas da capital, une-se à vivacidade do forró, do artesanato local e da literatura de cordel, fazendo do povo paraibano um guardião orgulhoso de suas raízes e tradições.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

