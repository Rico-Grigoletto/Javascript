const express = require("express");
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.Produtos);
router.get('/camisetas', siteController.Camisetas);

module.exports = router;