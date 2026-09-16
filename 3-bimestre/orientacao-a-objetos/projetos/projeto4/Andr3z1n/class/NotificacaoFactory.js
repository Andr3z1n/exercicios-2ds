const Email = require("./Email")
const SMS = require("./SMS")
const PushApp = require("./PushApp")

class NotificacaoFactory {
    static criar(tipo, titulo, prioridade) {
        if (tipo === "email") {
            return new Email(titulo, prioridade)
        }

        if (tipo === "sms") {
            return new SMS(titulo, prioridade)
        }

        if (tipo === "pushapp") {
            return new PushApp(titulo, prioridade)
        }

        throw new Error("Tipo de notificação inválido")
    }
}

module.exports = NotificacaoFactory