import { useState } from 'react'

import Home from '@/pages/Home'
import PrimeiraPag from '@/pages/PrimeiraPag'
import Pergunta from '@/pages/Pergunta'
import Resposta from '@/pages/Resposta'
import SegundaPag from '@/pages/SegundaPag'
import SelecTemaLaranja from '@/pages/SelecTemaLaranja'
import Tutorial from '@/pages/Tutorial'
import Configuracoes from '@/pages/Configuracoes'
import Atencao from '@/pages/Atencao'
import CopaDoMundo from '@/pages/CopaDoMundo'
import SelecTemaVermelho from '@/pages/SelecTemaVermelho'
import SelecTemaAzul from '@/pages/SelecTemaAzul'
import SelecTemaRoxo from '@/pages/SelecTemaRoxo'
import SelecTemaVerde from '@/pages/SelecTemaVerde'
import SelecTemaAmarelo from '@/pages/SelecTemaAmarelo'
import SelecTemaBranco from '@/pages/SelecTemaBranco'
import SelecTemaRosa from '@/pages/SelecTemaRosa'

function App() {
  const [pagina, setPagina] = useState('home')

  if (pagina === 'home') {
    return <Home mudarPagina={setPagina} />
  }

  if (pagina === 'tutorial') {
    return <Tutorial mudarPagina={setPagina} />
  }

  if (pagina === 'config') {
    return <Configuracoes mudarPagina={setPagina} />
  }

  if (pagina === 'primeira') {
    return <PrimeiraPag mudarPagina={setPagina} />
  }

  if (pagina === 'copa') {
    return <CopaDoMundo mudarPagina={setPagina} />
  }

  if (pagina === 'segunda') {
    return <SegundaPag mudarPagina={setPagina} />
  }

  if (pagina === 'temaLaranja') {
    return <SelecTemaLaranja mudarPagina={setPagina} />
  }

  if (pagina === 'temaVermelho') {
    return <SelecTemaVermelho mudarPagina={setPagina} />
  }

  if (pagina === 'temaAzul') {
    return <SelecTemaAzul mudarPagina={setPagina} />
  }

  if (pagina === 'temaRoxo') {
    return <SelecTemaRoxo mudarPagina={setPagina} />
  }

  if (pagina === 'temaVerde') {
    return <SelecTemaVerde mudarPagina={setPagina} />
  }

  if (pagina === 'temaAmarelo') {
    return <SelecTemaAmarelo mudarPagina={setPagina} />
  }

  if (pagina === 'temaBranco') {
    return <SelecTemaBranco mudarPagina={setPagina} />
  }

  if (pagina === 'temaRosa') {
    return <SelecTemaRosa mudarPagina={setPagina} />
  }

  if (pagina === 'atencao') {
    return <Atencao mudarPagina={setPagina} />
  }

  if (pagina === 'pergunta') {
    return <Pergunta mudarPagina={setPagina} />
  }

  if (pagina === 'resposta') {
    return <Resposta mudarPagina={setPagina} />
  }
}

export default App