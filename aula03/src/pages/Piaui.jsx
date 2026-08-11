import "../App.css"
import { Link } from "react-router-dom"
export default function Piaui() {
    return (
        <div>

            <h1>Estado do Piauí</h1>
            <div className="conteudo">

                <img src="/PI.png" alt="Piauí" />
                <p>O Piauí é um estado brasileiro localizado na Região Nordeste, com uma população de mais de 3,2 milhões de habitantes e a cidade de Teresina como sua capital. O território piauiense destaca-se por possuir o menor litoral do país, com apenas 66 quilômetros de extensão banhados pelo Oceano Atlântico, sendo a única capital nordestina que não se situa à beira-mar. A geografia do estado é marcada por uma rica transição entre diferentes biomas, como a Caatinga, o Cerrado e a Mata dos Cocais, além de ser cortado pela importante bacia do Rio Parnaíba. O nome do estado tem origem tupi e faz referência ao rio dos piaus, uma espécie de peixe comum na região. Historicamente, a ocupação do interior piauiense iniciou-se com a expansão da pecuária bovina no período colonial, e o estado teve papel fundamental nas lutas pela independência do Brasil, marcadas pela histórica Batalha do Jenipapo. Atualmente, a economia do Piauí apoia-se no comércio, na prestação de serviços, na expansão agrícola de grãos no cerrado, na pecuária e em forte destaque na produção de energias renováveis, como a solar. No turismo e na arqueologia, o estado ganha projeção internacional por abrigar o Parque Nacional da Serra da Capivara, que guarda os vestígios mais antigos da presença humana nas Américas, e o exuberante Delta do Parnaíba, o único em mar aberto das Américas.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

