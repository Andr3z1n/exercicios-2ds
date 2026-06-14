import { useState } from "react";

export default function FormularioPersonagem({ adicionarPersonagem }) {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");

  function enviar(event) {
    event.preventDefault();

    if (!nome || !classe) return;

    adicionarPersonagem({
      nome,
      classe,
    });

    setNome("");
    setClasse("");
  }

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Nome do personagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

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
  );
}