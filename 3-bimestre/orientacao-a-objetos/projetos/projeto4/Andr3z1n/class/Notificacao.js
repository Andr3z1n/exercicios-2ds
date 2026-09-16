class Notificacao {
    #titulo
    #prioridade

    constructor(titulo, prioridade) {
        this.#titulo = titulo
        this.#prioridade = prioridade
    }

    get titulo() {
        return this.#titulo
    }

    get prioridade() {
        return this.#prioridade
    }

    resumo() {
        return "Notificação registrada no sistema"
    }
}

module.exports = Notificacao