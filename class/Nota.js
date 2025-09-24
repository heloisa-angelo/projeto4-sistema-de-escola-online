class Nota{
    constructor(valor,disciplina){
        this.valor = valor,
        this.disciplina = disciplina
    }
    toString() {
        return `Nota {
            valor: ${this.valor}
            disciplina: ${this.disciplina.toString()}
        }`
    }
}

module.exports = Nota
