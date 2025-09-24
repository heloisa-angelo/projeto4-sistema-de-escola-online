class Usuario {
    #nome
    #idade
    constructor(nome,idade){
        this.#idade = idade,
        this.#nome = nome
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
    acessoPainel(){
        return 'Acesso ao sistema escolar'
    }
}
module.exports = Usuario
