const Notificacao = require("./Notificacao")

class PushApp extends Notificacao {
    resumo() {
        return "Notificação enviada por push no aplicativo"
    }
}

module.exports = PushApp