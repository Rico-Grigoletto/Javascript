const express = require("express");
const router = express.Router();
const clientescontroller = require('../controllers/clientescontroller');

router.get('/', clientescontroller.produtos);
