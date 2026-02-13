function calcularFrete() {
    let compra = Number(document.getElementById("compra").value);
    let frete = 20;

    if (compra >= 150) {
        frete = 0;
    }

    let total = compra + frete;

    document.getElementById("resultado").innerHTML =
        `Frete: R$ ${frete.toFixed(2)} <br>
         Total da Compra: R$ ${total.toFixed(2)}`;
}
