const express = require('express');

const router = express.Router();
const ClientesControllers = require("../controllers/clientes.controller");

router.get("/clientes/listar", ClientesControllers.listarClientes);
router.get("/clientes/buscar/:id", ClientesControllers.buscarCliente);
router.post("/clientes/cadastrar", ClientesControllers.novoCliente);
router.delete("/clientes/apagar/:id", ClientesControllers.apagarCliente);
router.put("/clientes/atualizar/:id", ClientesControllers.atualizarCliente);

module.exports = router;