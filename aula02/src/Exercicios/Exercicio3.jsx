export default function Exercicio3({n1,n2}) {
    let sum = (n1 + n2) / 2

    if (sum >= 6) {
        return(
        <div>Nota final: {sum}, passou</div>
        )   
    }else{
        return(
            <div>Nota final: {sum}, não passou</div>
        )
        }

}