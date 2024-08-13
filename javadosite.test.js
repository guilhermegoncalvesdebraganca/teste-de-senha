const {validarSenha,confirmarSenha} = require('./javadosite')

it('Testando se a senha é valida', () => {
    expect(validarSenha("#SENHa12")).toBe(true)
})

it('Testando se a senha é invalida por não ter 8 caracteres', () => {
    expect(validarSenha("#Senha1")).toBe(false)
})

it('Testando se a senha é invalida por não ter um caracter especial', () => {
    expect(validarSenha("Senha122")).toBe(false)
})

it('Testando se a senha é invalida por não ter uma letra maiuscula', () => {
    expect(validarSenha("#senha12")).toBe(false)
})

it('Testando se a senha é invalida por não ter numero', () => {
    expect(validarSenha("#Senhaaa")).toBe(false)
})

it('Testando se a senha coincide', () => {
    expect(confirmarSenha("#Senha12", "#Senha12")).toBe(true);
})

it('Testando se a senha não coincide', () => {
    expect(confirmarSenha("#Senha12", "#Sinha12")).toBe(false);
})