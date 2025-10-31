const { formulario, camisetas } = require("./siteController");



module.exports = {
        formulario, (req, res) => {
            res.sendFile('formulario.html', { root: './views' });
            camisetas: (req, res) => {
                res.sendFile('camisetas.html', { root: './views' });
            },
            formcadastrar: (req, res) => {
                res.sendFile('formcadastrar.html', { root: './views' });
            },
            cadastrar: (req, res) => {
                const { nome, preco, ID, quant } = req.body;  
                const mensagemcadastro = produtosmodel.gerarMensagemCadastro(nome, preco, ID, quant);
                res.send(`<h1>${mensagemcadastro}</h1>`);
            
}
};