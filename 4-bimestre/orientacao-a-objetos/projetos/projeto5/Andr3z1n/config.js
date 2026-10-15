function carregarConfig() {
  return {
    servico: process.env.SERVICO || "petshop",
    porta: Number(process.env.PORT || 3000),
    ambiente: process.env.AMBIENTE || "desenvolvimento"
  }
}

module.exports = { carregarConfig }