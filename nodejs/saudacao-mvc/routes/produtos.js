const express = require("express");
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', siteController.Produtos);
router.get('/camisetas', siteController.Camisetas);
router.get("cadastrar", ProdutosController.cadastrarForm);
router.post("cadastrar", ProdutosController.cadastrar);


module.exports = router;