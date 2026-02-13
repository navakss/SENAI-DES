function acrescentar() {
    let salario = Number(document.getElementById("salario").value);
    let bonus = 0;

    if (salario > 2000) {
        bonus = salario * 0.10;
    }

    let salarioFinal = salario + bonus;

    document.getElementById("resultado").innerHTML =
        `Bônus: R$ ${bonus.toFixed(2)} <br>
         Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}
