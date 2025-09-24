const Aluno = require("./class/Aluno");
const Coodernador = require("./class/Coordenador");
const Disciplina = require("./class/Disciplina");
const Nota = require("./class/Nota");
const Professor = require("./class/Professor");
const Turma = require("./class/Turma");
const Usuario = require("./class/Usuario");

const usuario = new Usuario('Ana', 10)
const aluno = new Aluno('Heloisa', 15)
const professor = new Professor('Tia Dani', 40)
const coodernador = new Coodernador('Valval',40)
const historia = new Disciplina('Historia', 80)
const notahistoria = new Nota(10, historia)
const turma = new Turma('Turma B')
aluno.adicionarNota(notahistoria)
console.log(`
    ${usuario.acessoPainel()}
    =========================
    ${aluno.acessoPainel()}
    Nome do aluno: ${aluno.nome}
    Idade do aluno: ${aluno.idade}
    Notas do aluno: [
        ${aluno.notas.toString()}
    ]
    =========================
    ${professor.acessoPainel()}
    Nome do Professor: ${professor.nome}
    Idade do Professor: ${professor.idade}
    Turma de Ensino : ${turma.nomeTurma}
    =========================
    ${coodernador.acessoPainel()}
    Nome do Coordenador: ${coodernador.nome}
    Idade do Coordenador: ${coodernador.idade}
    `)
