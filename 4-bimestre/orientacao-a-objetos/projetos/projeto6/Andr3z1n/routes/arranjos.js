
const express = require("express")
const router = express.Router()

const arranjos = [
    { id: 1, nome: "Buque Simples", ocasiao: "aniversario", preco: 60, disponivel: true },
    { id: 2, nome: "Cesta Mista", ocasiao: "agradecimento", preco: 95, disponivel: true },
    { id: 3, nome: "Coroa", ocasiao: "homenagem", preco: 250, disponivel: false }
]

router.get("/", (req, res) => {
    res.status(200).json(arranjos)
})

router.get("/disponiveis", (req, res) => {
    const disponiveis = arranjos.filter(
        arranjo => arranjo.disponivel === true
    )

    res.status(200).json(disponiveis)
})

router.get("/total", (req, res) => {
    res.status(200).json({ total: arranjos.length })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de arranjo realizado"
    })
})

module.exports = router