const Usuario = require("./Usuario");

class Coodernador extends Usuario{
    acessoPainel(){
        return "Painel do Coordenador: administração escolar"
    }
}

module.exports = Coodernador
