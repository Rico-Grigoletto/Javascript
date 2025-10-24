module.exports = {
    gerarMensagemLogin: (login, senha) => {

        if (login==='admin' && senha==='1234') {
            return 'Login realizado com sucesso!';
        }