class Turma {
    constructor(nomeTurma){
        this.nomeTurma = nomeTurma,
        this.disciplinas = [],
        this.alunos = []
    }

    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina)
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno)
    }

    toString() {
        
    }
}

module.exports = Turma
