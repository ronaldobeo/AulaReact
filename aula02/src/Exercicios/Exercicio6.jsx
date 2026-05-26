export default function Exercicio6({capi, taxa,meses}){

    const capital = Number(capi);
    const taxaI =  Number(taxa);
    const tempo = Number(meses);

    let jurosS = capital * (1 + (taxaI/100) * tempo);
    let jurosC = capital * Math.pow(1 + taxaI / 100, tempo);    
    return(
        <div>
            Juros Simples: R$ {jurosS.toFixed(2)}
            <br />
            Juros Compostos: R$ {jurosC.toFixed(2)}
        </div>
    );

}