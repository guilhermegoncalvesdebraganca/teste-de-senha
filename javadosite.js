function validarSenha(senha) {
    if (!/.{8,}/.test(senha)) {
        return false
    }

    if (!/[A-Z]/.test (senha)) {
        return false
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        return false
    }

    if (!/[0-9]/.test(senha)) {
        return false
    }
    else{
        return true
    }}
    
    function confirmarSenha(senha, confirmarSenha){
    if (senha === confirmarSenha) {
        ("As senhas coincidem!");
        return true;
    } else {
        ("As senhas não coincidem. Tente novamente.");
        return false;
    }
}

module.exports = { validarSenha, confirmarSenha};