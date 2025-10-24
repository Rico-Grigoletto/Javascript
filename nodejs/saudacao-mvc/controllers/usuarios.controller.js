const usuariosmodel = require('../models/usuariosmodel');
const { formulario } = require('./siteController');

module.exports = {

    index: (req, res) => {  
        res.sendfile('usuarios/.html', { root: './views' });

        formulario: (req, res) => {     
            res.sendfile('formlogin.html', { root: './views' });

            login: (req, res) => {
                const {login, senha} = req.body;
                const usuario mensagemlogin = usuariosmodel.gerarmensagemLogin(login, senha);
                res.send('<h1>$(mensagemlogin)</h1>');
            };