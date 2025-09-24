class Disciplina {
    constructor(nomeDisciplina, cargaHoraria){
        this.nomeDisciplina = nomeDisciplina
        this.cargaHoraria = cargaHoraria
    }
    toString() {
        return `Disciplina { nome: ${this.nomeDisciplina}, cargaHoraria: ${this.cargaHoraria} }`
    }
}

module.exports =  Disciplina
