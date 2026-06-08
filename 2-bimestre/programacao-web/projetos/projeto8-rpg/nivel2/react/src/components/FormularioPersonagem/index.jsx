import { useState, useRef } from "react"
import "./style.css"

function FormularioPersonagem({ adicionarPersonagem }) {
  const [nome, setNome] = useState("")
  const [classe, setClasse] = useState("")

  const nomeRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nome.trim() || !classe.trim()) return

    adicionarPersonagem({
      nome,
      classe
    })

    setNome("")
    setClasse("")

    nomeRef.current.focus()
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>Nome</label>

      <input
        ref={nomeRef}
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="nome do personagem"
      />

      <label>Classe</label>

      <input
        type="text"
        value={classe}
        onChange={(e) => setClasse(e.target.value)}
        placeholder="classe do personagem"
      />

      <button type="submit">
        Cadastrar Personagem
      </button>
    </form>
  )
}

export default FormularioPersonagem