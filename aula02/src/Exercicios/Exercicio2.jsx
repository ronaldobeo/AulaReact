export default function Exercicio2({peso, altura}) {
    let imc = peso / (altura **2);
    return(
        <div>
            Peso: {peso}, Altura:{altura}.O imc é {imc}
        </div>
    )
}