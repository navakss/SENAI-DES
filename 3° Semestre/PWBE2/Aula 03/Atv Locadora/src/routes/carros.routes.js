const express  = require('express');

const router = express.Router();
const CarrosController = require("../controllers/carros.controller");

router.get("/carros/listar", CarrosController.listarCarros);
router.get("/carros/buscar/:id", CarrosController.buscarCarro);
router.post("/carros/cadastrar", CarrosController.novoCarro);
router.delete("/carros/apagar/:id", CarrosController.apagarCarro);
router.put("/carros/atualizar/:id", CarrosController.atualizarCarro);

module.exports = router;