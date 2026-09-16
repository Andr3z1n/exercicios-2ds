const Notificacao = require("./Notificacao")

class SMS extends Notificacao {
    resumo() {
        return "Notificação enviada por SMS"
    }
}

module.exports = SMS