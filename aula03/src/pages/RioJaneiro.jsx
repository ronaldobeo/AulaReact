import '../App.css';
import { Link } from 'react-router-dom';
export default function RioJaneiro() {


    return (
        <div>
            <h1>Estado de Rio de Janeiro</h1>
            <div className="conteudo">
                <img src="/RJ.png" alt="Rio de Janeiro" />
                <p>O Rio de Janeiro é uma cidade incrível que mistura praias lindas, como Copacabana e Ipanema, com grandes montes verdes e muita história para contar em cada esquina. A cidade é famosa no mundo todo por cartões-postais maravilhosos como o Cristo Redentor no topo do Corcovado e o Pão de Açúcar, que dão uma vista gigante de toda a costa e dos bairros cheios de vida. Caminhar pelo calçadão, sentir a brisa do mar, escutar um bom samba vindo de um barzinho na Lapa ou comer um biscoito com mate gelado na areia são coisas que fazem parte do dia a dia de quem mora ou visita esse lugar tão especial que respira alegria, música e cultura popular em um ritmo único e contagiante.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}