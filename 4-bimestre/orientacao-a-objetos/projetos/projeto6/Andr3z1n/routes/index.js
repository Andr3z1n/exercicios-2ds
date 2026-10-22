
const express = require("express")
const router = express.Router()

const arranjosRouter = require("./arranjos")
const clientesRouter = require("./clientes")

router.get("/", (req, res) => {
    res.status(200).json({
    mensagem: "API de Floricultura"
    })
})

router.use("/arranjos", arranjosRouter)
router.use("/clientes", clientesRouter)

module.exports = router