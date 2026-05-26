import "./App.css"
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicios/Exercicio1";
import Exercicio2 from "./Exercicios/Exercicio2";
import Exercicio3 from "./Exercicios/Exercicio3";
import Exercicio4 from "./Exercicios/Exercicio4";
import Exercicio5 from "./Exercicios/Exercicio5";
import Exercicio6 from "./Exercicios/Exercicio6";
import Exercicio7 from "./Exercicios/Exercicio7";


export default function App() {
    return (
        <div>
            <h1>Aula 02 - Criação de Componentes</h1>

            <div className="card">
                <h3>Chamadas para o componente Exemplo1 </h3>
                <Exemplo1 numero1={10} numero2={55} />

            </div>

            <div className="card">
                <h3>Exercicio 1</h3>
                <Exercicio1 numero={5} />

            </div>
            <div className="card">
                <h3>Exercicio 2</h3>
                <Exercicio2 peso={85} altura={1.85} />
            </div>
            <div className="card">
                <h3>Exercicio 3</h3>
                <Exercicio3 n1={10} n2={5} />

            </div>

            <div className="card">
                <h3>Exercício 4</h3>
                <Exercicio4 baset={7} alturat={9} />
                <Exercicio4 baset={8} alturat={4} />
            </div>

            <div className="card">
                <h3>Exercício 5</h3>
                <Exercicio5 consultas={35} />
                <Exercicio5 consultas={50} />
            </div>
            <div className="card">
                <h3>Exercício 6</h3>
                <Exercicio6 capi={1000} meses={6} taxa={5} />
            </div>
            <div className="card">
                <h3>Exercício 7</h3>
                <Exercicio7 celsius={30}/>
            </div>

        </div>
    );
}

