export default function Exercicio9({valorV,valorS}) {
    const venda = valorV;
    const salario = valorS;
    const comissao = venda * 0.06;
    const salarioF = salario + comissao;

    return(
        <div>
            Sálario: {salario}
            <br />
            Valor da Venda: {venda}
            <br />
            Comissão: {comissao}
            <br />
            Sálario Final: {salarioF}
        </div>
    );
}