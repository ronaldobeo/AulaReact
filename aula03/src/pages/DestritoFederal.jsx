import "../App.css"
import { Link } from "react-router-dom"
export default function DistritoFederal() {
    return (
        <div>

            <h1>Destrito Federal</h1>
            <div className="conteudo">

                <img src="/DF.png" alt="Distrito Federal" />
                <p>O Distrito Federal não é um estado convencional, mas sim uma unidade federativa especial do Brasil localizada na região Centro-Oeste, com uma área de cerca de 5.760 km² e quase três milhões de habitantes. É importante esclarecer que ele não possui municípios, de forma que o seu território é inteiramente ocupado por Brasília — a capital federal inaugurada em 1960 pelo presidente Juscelino Kubitschek — e por suas regiões administrativas, que funcionam de maneira descentralizada. Politicamente singular, o ente acumula simultaneamente as competências e obrigações típicas de estados e de municípios, sendo administrado por um governador eleito e por deputados distritais, sem a figura de prefeitos ou vereadores. Geograficamente, o Distrito Federal faz divisa predominantemente com o estado de Goiás e, em uma estreita faixa a sudeste, com Minas Gerais. Sua economia é fortemente impulsionada pelo setor público, mas também conta com forte participação do comércio, de serviços especializados e do turismo voltado à apreciação do famoso projeto urbanístico de Lúcio Costa e da arquitetura modernista de Oscar Niemeyer, reconhecida mundialmente como Patrimônio Cultural da Humanidade pela Unesco.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}

