export default function Exercicio10({salarioB}) {
    const salariobase = salarioB;
    const gratificacao = salarioB * 0.08;
    const salariof = salarioB + gratificacao;
 
    return(
        <div>
            Salario Base: R$ {salariobase.toFixed(2)} 
            <br />
            Gratificação (8%) : R$ {gratificacao.toFixed(2)}
            <br />
            Salario Final (Salario Base + Gratificação): R$ {salariof.toFixed(2)}
        </div>
    );
}