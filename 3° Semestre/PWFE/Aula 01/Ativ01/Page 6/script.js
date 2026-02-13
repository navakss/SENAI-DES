function calcularCashback() {
    let compra = Number(document.getElementById("compra").value);
    let cashback = 0;

    if (compra > 300) {
        cashback = compra * 0.05;
    }

    let valorLiquido = compra - cashback;

    document.getElementById("resultado").innerHTML =
        `Cashback: R$ ${cashback.toFixed(2)} <br>
        Valor Líquido: R$ ${valorLiquido.toFixed(2)}`;
}
