import "../App.css"
import { Link } from "react-router-dom"
export default function Rondonia() {
    return (
        <div>

            <h1>Estado do Rondônia</h1>
            <div className="conteudo">

                <img src="/RO.png" alt="Espirito Santo" />
                <p>Rondônia é um estado brasileiro localizado na região Norte, fazendo limites com o Mato Grosso, Amazonas, Acre e a Bolívia. Sua capital é Porto Velho, cidade banhada pelo caudaloso rio Madeira. O nome do estado é uma homenagem ao Marechal Cândido Rondon, famoso militar e sertanista que explorou os sertões e instalou linhas telegráficas na região. A história do território ganhou forte impulso no início do século XX com a construção da Estrada de Ferro Madeira-Mamoré, voltada para escoar a produção da borracha. Com os fluxos migratórios intensificados nas décadas seguintes, a área deixou de ser território federal e foi elevada à categoria de estado em dezembro de 1981, com instalação oficial no início de 1982. Geograficamente, o estado possui relevo predominantemente plano e é dominado pelo clima equatorial, apresentando altas temperaturas e umidade constante, além de abrigar trechos significativos da Floresta Amazônica. Atualmente, a economia rondoniense destaca-se como uma das mais dinâmicas da região Norte, impulsionada fortemente pelo agronegócio, com expressiva produção de soja, café, milho e carne bovina, além de contar com importante atuação do setor de serviços e do comércio fronteiriço. As principais cidades, como Ji-Paraná, Ariquemes, Cacoal e Vilhena, concentram boa parte da população e formam o eixo de desenvolvimento que integra o estado ao restante do país por meio da rodovia BR-364.</p>
                <p><Link to='/'>Voltar</Link></p>
            </div>
        </div>
    )
}