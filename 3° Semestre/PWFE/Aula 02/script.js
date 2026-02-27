const modalCli = document.getElementById("modalCli");
var clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function salvarLocal() {
    localStorage.setItem("clientes", JSON.stringify(clientes));
    window.location.reload();
}

function abrirModal() {
    modalCli.style.display="block";
}

function fecharModal() {
    modalCli.style.display="none";
}

const formCli = document.querySelector("#formCli");
formCli.addEventListener("submit", e => {
    e.preventDefault();
    const obj ={
        cpf: formCli.cpf.value,
        nome: formCli.nome.value,
        sobrenome: formCli.nome.value,
        nascimento: formCli.nome.value
    }
    clientes.push(obj);
    formCli.reset();
    salvarLocal();1
});

function renderizarTabela() {
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";
    clientes.forEach((c, i) =>{
        corpo.innerHTML +=`
        <tr>
            <td>${c.cpf}</td>
            <td>${c.nomek}</td>
            <td>${c.sobrenome}</td>
            <td>${c.nascimento}</td>
            <td><button>Exclui</button></td>
        <tr>
        `;
    })
}

function excluir(indice) {
    clientes.splice(indice, 1);
    renderizarTabela();
}