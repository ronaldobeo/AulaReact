import "./App.css"
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicios/Exercicio1";
import Exercicio2 from "./Exercicios/Exercicio2";
import Exercicio3 from "./Exercicios/Exercicio3";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>

<div className="card">
<h3>Chamadas para o componente Exemplo1 </h3>
    <Exemplo1 numero1={10} numero2={55}/>

</div>

<div className="card">
<h3>Exercicio 1</h3>
    <Exercicio1 numero={5}/>

</div>
<div className="card">
<h3>Exercicio 2</h3>
    <Exercicio2 peso={85} altura={1.85}/>
</div>
<div className="card">
<h3>Exercicio 3</h3>
    <Exercicio3 n1={10} n2={5}/>

</div>


    </div>  
 );
}

