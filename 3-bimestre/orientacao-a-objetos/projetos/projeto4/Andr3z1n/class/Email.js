const Notificacao = require("./Notificacao")

class Email extends Notificacao {
    constructor(titulo, prioridade) {
        super(titulo, prioridade)
        this.registros = []
    }

    resumo() {
        return "Notificação enviada por e-mail"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Email