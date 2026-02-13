function calcularMulta() {
    let mensalidade = Number(document.getElementById("mensalidade").value);
    let dias = Number(document.getElementById("dias").value);
    let multa = 0;

    if (dias > 0) {
        multa = mensalidade * 0.02;
    }

    let total = mensalidade + multa;

    document.getElementById("resultado").innerHTML =
        `Multa: R$ ${multa.toFixed(2)} <br>
         Total a pagar: R$ ${total.toFixed(2)}`;
}
