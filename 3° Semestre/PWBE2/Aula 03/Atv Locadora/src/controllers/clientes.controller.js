const prisma = require("../data/prisma");

const listarClientes = async (req, res) => {
    const listar = await prisma.clientes.findMany();

    res.json(listar).status(200).end();
};

const buscarCliente = async (req, res) => {
    const id = parseInt(req.params.id);

    const buscar = await prisma.clientes.findUnique({
        where: { id }
    });

    res.json(buscar).status(200).end();
};

const novoCliente = async (req, res) => {
    let { nome, CPF, CNH, email } = req.body;

    //Validação Nome
    if (!nome || nome.trim() == "") {
        return res.status(400).json({ erro: "Nome é obrigatório" }).end();
    }

    nome = nome.trim();
    const partesNome = nome.split("");

    if (partesNome.length < 2) {
        return res.status(400).json({ erro: "Nome deve conter pelo menos duas palavras" }).end();
    }

    const NometemNumero = nome.split("").some(c => c >= "0" && c <= "9");

    if (NometemNumero) {
        return res.status(400).json({ erro: "Nome não pode conter números" }).end();
    }

    //Validação CPF
    if (!CPF) {
        return res.status(400).json({ erro: "CPF é obrigatório" }).end();
    }

    // Remove tudo que não for número
    // /      → indica o início da expressão
    // [^0-9] → corresponde a qualquer caractere que NÃO seja um dígito de 0 a 9
    // g      → aplica a substituição em toda a string, não apenas no primeiro caractere
    // ""     → substitui todos os caracteres correspondentes por uma string vazia, ou seja, remove eles
    CPF = CPF.toString().replace(/[^0-9]/g, "");

    if (CPF.length !== 11) {
        return res.status(400).json({ erro: "CPF deve ter 11 números" }).end();
    }

    const CPFDuplo = await prisma.clientes.findUnique({
        where: { CPF }
    });

    if (CPFDuplo) {
        return res.status(400).json({ erro: "Já existe um cliente com esse CPF" }).end();
    }

    //Validação Email
    if (!email) {
        return res.status(400).json({ erro: "Email é obrigatório" }).end();
    }

    email = email.toLowerCase();

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({ erro: "Email inválido" }).end();
    }

    //Email Duplo
    const clientes = await prisma.clientes.findMany();

    const emailDuplicado = clientes.some(c => c.email == email);

    if (emailDuplicado) {
        return res.status(400).json({ erro: "Já existe cliente com esse email" }).end();
    }

    //Validação CNH
    if (!CNH) {
        return res.status(400).json({ erro: "CNH é obrigatória" }).end();
    }

    const primeiroCaractere = CNH.split("")[0];

    if (primeiroCaractere < "0" || primeiroCaractere > "9") {
        return res.status(400).json({ erro: "CNH deve começar com número" }).end();
    }

    //Cadastro Cliente
    const ncliente = await prisma.clientes.create({
        data: {
            nome,
            CPF,
            CNH,
            email
        }
    });

    res.status(201).json(ncliente).end();
};

const apagarCliente = async (req, res) => {
    const id = parseInt(req.params.id);

    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

const atualizarCliente = async (req, res) => {
    const id = parseInt(req.params.id);
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