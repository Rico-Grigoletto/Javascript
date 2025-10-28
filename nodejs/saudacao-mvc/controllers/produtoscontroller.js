const { formulario } = require("./siteController");

module.exports = {
        formulario, (req, res) => {
            res.sendFile('formulario.html', { root: './views' });

            cadastrar: (req, res) => {
                const { nome, preco, ID, quant } = req.body;  
                const mensagemcadastro = produtosmodel.gerarMensagemCadastro(nome, preco, ID, quant);
                res.send(`<h1>${mensagemcadastro}</h1>`);
}
};