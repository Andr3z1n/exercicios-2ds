import { useState, useEffect } from "react"
import FormularioPersonagem from "./components/FormularioPersonagem"
import ListaPersonagens from "./components/ListaPersonagens"
import PainelStatus from "./components/PainelStatus"
import "./App.css"

export default function App() {
  const [personagens, setPersonagens] = useState([])

  const adicionarPersonagem = (novoPersonagem) => {
    setPersonagens((prev) => [...prev, novoPersonagem])
  };

  useEffect(() => {
    console.log("Lista atualizada")
  }, [personagens])

  return (
    <div className="container">
      <h1>Gerenciador de Personagens Rpg</h1>

      <FormularioPersonagem
        adicionarPersonagem={adicionarPersonagem}
      />

      <PainelStatus total={personagens.length} />

      <ListaPersonagens personagens={personagens} />
    </div>
  )
}