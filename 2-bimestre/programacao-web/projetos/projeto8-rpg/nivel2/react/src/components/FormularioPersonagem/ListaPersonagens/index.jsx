import { useRef, useState } from "react"
import "./style.css"

export default function FormularioPersonagem({ adicionarPersonagem }) {
  const [nome, setNome] = useState("")
  const [classe, setClasse] = useState("")

  const nomeRef = useRef()

  const cadastrar = (e) => {
    e.preventDefault()

    if (!nome || !classe) return

    adicionarPersonagem({
      nome,
      classe
    })

    setNome("")
    setClasse("")

    nomeRef.current.focus()
  }
export default ListaPersonagens
  return (
    <form className="formulario" onSubmit={cadastrar}>
      <label>Nome</label>
      <input
        ref={nomeRef}
        type="text"
        placeholder="Nome do personagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Classe</label>
      <input
        type="text"
        placeholder="Classe do personagem"
        value={classe}
        onChange={(e) => setClasse(e.target.value)}
      />

      <button type="submit">
        Cadastrar Personagem
      </button>
    </form>
  )
}