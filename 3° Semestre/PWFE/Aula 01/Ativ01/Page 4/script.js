function calcularTaxa() {
    let conta = Number(document.getElementById("conta").value);
    let taxa = 0;

    if (conta > 100) {
        taxa = conta * 0.10;
    }

    let total = conta + taxa;

    document.getElementById("resultado").innerHTML =
        `Taxa de Serviço: R$ ${taxa.toFixed(2)} <br>
         Total da Conta: R$ ${total.toFixed(2)}`;
}
