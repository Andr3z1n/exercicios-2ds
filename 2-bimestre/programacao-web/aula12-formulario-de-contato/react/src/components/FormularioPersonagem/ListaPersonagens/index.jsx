import "./style.css"

export default function ListaPersonagens({ personagens }) {
  if (personagens.length === 0) {
    return (
      <div className="lista">
        <p>Nenhum personagem cadastrado!</p>
      </div>
    )
  }

  return (
    <div className="lista">
      <ul>
        {personagens.map((personagem, index) => (
          <li key={index}>
            {personagem.nome} - {personagem.classe}
          </li>
        ))}
      </ul>
    </div>
  )
}