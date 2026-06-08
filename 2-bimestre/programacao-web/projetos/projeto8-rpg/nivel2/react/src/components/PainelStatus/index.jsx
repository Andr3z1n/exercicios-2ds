import "./style.css"

function PainelStatus({ total }) {
  return (
    <div className="painel-status">
      <h2>Total de Personagens: {total}</h2>
    </div>
  )
}

export default PainelStatus