import { useState } from 'react'

import Home from '@/pages/Home'
import PrimeiraPag from '@/pages/PrimeiraPag'
import Pergunta from '@/pages/Pergunta'
import Resposta from '@/pages/Resposta'
import SegundaPag from '@/pages/SegundaPag'
import SelecTemaLaranja from '@/pages/SelecTemaLaranja'

function App() {
  const [pagina, setPagina] = useState('home')

  if (pagina === 'home') {
    return <Home mudarPagina={setPagina} />
  }

  if (pagina === 'primeira') {
    return <PrimeiraPag mudarPagina={setPagina} />
  }

  if (pagina === 'segunda') {
    return <SegundaPag mudarPagina={setPagina} />
  }

  if (pagina === 'temaLaranja') {
    return <SelecTemaLaranja mudarPagina={setPagina} />
  }

  if (pagina === 'pergunta') {
    return <Pergunta mudarPagina={setPagina} />
  }

  if (pagina === 'resposta') {
    return <Resposta mudarPagina={setPagina} />
  }
}

export default App