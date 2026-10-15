const { carregarConfig } = require("./config")

function handler(req, res) {
  const config = carregarConfig()
  const caminho = new URL(req.url, "http://localhost").pathname

  if (caminho === "/") {
    res.statusCode = 200
    res.end(`Servico ativo: ${config.servico}`)
    return
  }

  if (caminho === "/sinal") {
    res.statusCode = 200;
    res.end("ok")
    return;
  }

  if (caminho === "/status") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
      online: true,
      ...config
    }));
    return
  }

  res.statusCode = 404
  res.end("Rota nao encontrada")
}

module.exports = handler