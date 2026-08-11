import "../App.css"
import { Link } from "react-router-dom"
export default function Maranhao() {
    return (
        <div>

            <h1>Estado do Maranhão</h1>
            <div className="conteudo">

                <img src="/MA.png" alt="Maranhão" />
                <p>O Maranhão é um estado brasileiro situado na Região Nordeste, com uma área de mais de 331 mil quilômetros quadrados e cerca de 7 milhões de habitantes. Sua capital é a cidade de São Luís, única capital do país fundada por franceses em 1612. O território faz limites com o Oceano Atlântico ao norte e com os estados do Piauí, Tocantins e Pará, destacando-se como uma zona de transição geográfica e cultural entre o Nordeste e o Norte do país. A paisagem maranhense é extremamente rica e diversa, abrigando ecossistemas que misturam o Cerrado, a Floresta Amazônica e a vegetação de mangues e dunas litorâneas, onde se encontra o mundialmente famoso Parque Nacional dos Lençóis Maranhenses. A cultura local é vibrante e marcada pela forte influência das matrizes indígena, africana e europeia, expressas em manifestações folclóricas tradicionais como o Bumba-meu-boi e o Tambor de Crioula. Além da importância turística e ecológica, o estado possui um papel estratégico na economia nacional, impulsionado pelo Complexo Portuário de São Luís e pela produção agrícola na região de fronteira do Matopiba.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

