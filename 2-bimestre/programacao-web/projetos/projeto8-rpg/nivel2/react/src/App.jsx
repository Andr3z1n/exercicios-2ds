import { useState, useEffect } from "react"
import FormularioPersonagem from "./components/FormularioPersonagem"
import ListaPersonagens from "./components/ListaPersonagens"
import PainelStatus from "./components/PainelStatus"

function App() {
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    console.log("Lista atualizada")
  }, [personagens])

  const adicionarPersonagem = (novoPersonagem) => {
    setPersonagens((prev) => [...prev, novoPersonagem])
  }

  return (
    <div className="container">
      <h1>GERENCIADOR DE PERSONAGENS RPG</h1>

      <FormularioPersonagem adicionarPersonagem={adicionarPersonagem} />

      <PainelStatus total={personagens.length} />

      <ListaPersonagens personagens={personagens} />
    </div>
  )
}

export default App