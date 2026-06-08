import { useEffect, useState } from 'react'
import FormularioPersonagem from './components/FormularioPersonagem'
import ListaPersonagens from './components/ListaPersonagens'
import PainelStatus from './components/PainelStatus'
import './App.css'

function App() {
  const [personagens, setPersonagens] = useState([])

  const adicionarPersonagem = (personagem) => {
    setPersonagens((prevPersonagens) => [...prevPersonagens, personagem])
  }

  useEffect(() => {
    if (personagens.length > 0) {
      console.log('Lista atualizada')
    }
  }, [personagens])

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Gerenciador de Personagens RPG</h1>
      </header>

      <section className="app-form">
        <FormularioPersonagem adicionarPersonagem={adicionarPersonagem} />
      </section>

      <section className="app-status">
        <PainelStatus total={personagens.length} />
      </section>

      <section className="app-list">
        <ListaPersonagens personagens={personagens} />
      </section>
    </main>
  )
}

export default App