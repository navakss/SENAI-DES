const express  = require(express);

const router = express.Router();
const CarrosController = require("../controllers/carros.controller");

router.get("/lista/carros", CarrosController.listarCarros);
router.get("/busca/carro", CarrosController.buscarCarro);
router.create("/cadastro/carro", CarrosController.novoCarro);
router.delete("/apagar/carro", CarrosController.apagarCarro);
router.update("/atualizar/carro", CarrosController.atualizarCarro)
module.exports = router;