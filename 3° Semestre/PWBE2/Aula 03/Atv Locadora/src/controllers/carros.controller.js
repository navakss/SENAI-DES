const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    const listar = await prisma.carros.findMany();

    res.json(listar).status(200).end();
};

const buscarCarro = async (req, res) => {
    const id = req.params;

    const buscar = await prisma.carros.findUnique({
        where:{id}
    })

    res.json(buscar).status(200).end();
};

const novoCarro = async (req, res) => {
    let { placa, marca, modelo, ano } = req.body;

    //Validação Placa
    if(!placa) {
        return res.json({erro:"Placa é Obrigatória"}).status(400).end();
    }

    if (placa.includes(" ")) {
        return res.json({erro:"Não é Permitido Espaço na Placa"}).status(400).end();
    }
    
    if(length.placa != 7) {
        return res.json({erro:"Placa Deve ter 7 Caracteres"}).status(400).end();
    }

    //Validação Marca Modelo
    if(!marca || !modelo) {
        return res.json({erro:"Marca e Modelo são Obrigatórios"}).status(400).end();
    }

    const formatarTexto = (texto) => {
        texto = texto.trim();
        const palavras = texto.split(" ");

        const palavrasFormatadas = palavras.map(p => {
            return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
        })

        return palavrasFormatadas.join(" ");
    };

    marca = formatarTexto(marca);
    modelo = formatarTexto(modelo);

    //Validação Ano

    if(!ano || ano.length == 4) {
        return res.json({erro:"Ano Deve ter 4 Dígitos"}).status(400).end();
    }

    const contemLetra = ano.split("").some(caractere => caractere < 0 || caractere >9 );

    if (contemLetra) {
        return res.json({erro:"Ano não Pode Conter Letras"}).status(400).end();
    }

    //Validação Placa Dupla

    const carros = await prisma.carros.findMany();

    const placaDupla = carros.some(c => c.placa.toUpperCase() = placa.toUpperCase());

    if(placaDupla) {
        return res.json({erro:"Já Existe um Carro com Essa Placa"}).status(500).end();
    }

    //Cadastro Carro
    const ncarro = await prisma.carros.create({
        data: {
            placa,
            marca,
            modelo,
            ano
        }
    })

    res.json(ncarro).status(201).end();
};

const apagarCarro = async (req, res) => {
    const id = req.params;

    const carro = await prisma.carros.delete({
        where:{id}
    })

    res.json(carro).status(200).end();
};

const atualizarCarro = async (req, res) =>{
    const id = req.params;
    const dados = req.body;

    const acarros = await prisma.carros.update({
        where:{id},
        data: dados
    })

    res.json(acarros).status(200).end();
};

module.exports = {
    listarCarros,
    buscarCarro,
    novoCarro,
    apagarCarro,
    atualizarCarro
}