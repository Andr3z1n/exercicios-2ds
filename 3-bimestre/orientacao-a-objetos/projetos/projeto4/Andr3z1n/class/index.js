const NotificacaoFactory = require("./class/NotificacaoFactory")
const Canal = require("./class/Canal")
const ListaEnvio = require("./class/ListaEnvio")
const Disparo = require("./class/Disparo")

const membro = NotificacaoFactory.criar("email", "Pedido aprovado", 2)

const canal = new Canal("Prioritário", 160)

const grupo = new ListaEnvio("Campanha de outubro")

const registro = new Disparo(0.05, canal)

grupo.adicionarCategoria(canal)
grupo.adicionarMembro(membro)

membro.adicionarRegistro(registro)

console.log(membro.resumo())
console.log(grupo)
console.log(membro.registros)