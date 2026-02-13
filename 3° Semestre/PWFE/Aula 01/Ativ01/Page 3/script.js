function calcularDesconto() {
    let valor = Number(document.getElementById("combustivel").value);
    let desconto = 0;

    if (valor > 200) {
        desconto = valor * 0.05;
    }

    let total = valor - desconto;

    document.getElementById("resultado").innerHTML =
        `Desconto: R$ ${desconto.toFixed(2)} <br>
         Total a pagar: R$ ${total.toFixed(2)}`;
}
