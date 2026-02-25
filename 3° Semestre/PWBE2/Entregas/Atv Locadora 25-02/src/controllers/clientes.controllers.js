const prisma = require("../data/prisma");

const listarClientes = async (req, res) => {
    const listar = await prisma.clientes.findMany();

    res.json(listar).status(200).end();
};

const buscarCliente = async (req, res) => {
    const id = req.params;

    const buscar = await prisma.clientes.findUnique({
        where: { id }
    });

    res.json(buscar).status(200).end();
};

const novoCliente = async (req, res) => {
    let { nome, CPF, CNH, email } = req.body;

    //Validação Nome
    if (!nome || nome.trim() == "") {
        return res.json({ erro: "Nome é obrigatório" }).status(400).end();
    }

    nome = nome.trim();
    const partesNome = nome.split(" ");

    if (partesNome.length < 2) {
        return res.json({ erro: "Nome deve conter pelo menos duas palavras" }).status(400).end();
    }

    //Numeros no Nome
    const nomeTemNumero = nome
        .split("")
        .some(c => c >= "0" && c <= "9");

    if (nomeTemNumero) {
        return res.json({ erro: "Nome não pode conter números" }).status(400).end();
    }

    //Validação CPF
    if (!CPF) {
        return res.json({ erro: "CPF é obrigatório" }).status(400).end();
    }

    CPF = CPF.replace(/\D/g, ""); // remove tudo que não for número

    if (CPF.length != 11) {
        return res.json({ erro: "CPF deve ter 11 números" }).status(400).end();
    }

    //Validação Email
    if (!email) {
        return res.json({ erro: "Email é obrigatório" }).status(400).end();
    }

    email = email.toLowerCase();

    if (!email.includes("@") || !email.includes(".")) {
        return res.json({ erro: "Email inválido" }).status(400).end();
    }

    //Email Duplo
    const clientes = await prisma.clientes.findMany();

    const emailDuplicado = clientes.some(c => c.email == email);

    if (emailDuplicado) {
        return res.json({ erro: "Já existe cliente com esse email" }).status(400).end();
    }

    //Validação CNH
    if (!CNH) {
        return res.json({ erro: "CNH é obrigatória" }).status(400).end();
    }

    const primeiroCaractere = CNH.split("")[0];

    if (primeiroCaractere < "0" || primeiroCaractere > "9") {
        return res.json({ erro: "CNH deve começar com número" }).status(400).end();
    }

    //Cadastro Cliente
    const ncliente = await prisma.clientes.create({
        data: {
            nome,
            CPF: parseInt(CPF),
            CNH: parseInt(CNH),
            email
        }
    });

    res.json(ncliente).status(201).end();
};

const apagarCliente = async (req, res) => {
    const id = req.params;

    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

const atualizarCliente = async (req, res) => {
    const id = req.params;
    const dados = req.body;

    const acliente = await prisma.clientes.update({
        where: { id },
        data: dados
    });

    res.json(acliente).status(200).end();
};

module.exports = {
    listarClientes,
    buscarCliente,
    novoCliente,
    apagarCliente,
    atualizarCliente
};