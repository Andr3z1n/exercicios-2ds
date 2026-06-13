import "./style.css"

export default function PainelStatus({ total }) {
  return (
    <div className="painel">
      <h2>Total de Personagens: {total}</h2>
    </div>
  )
}