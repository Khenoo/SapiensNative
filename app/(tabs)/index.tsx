import {useState} from 'react'
import Home from '@/pages/Home'
import Tutorial from '@/pages/Tutorial'
import Configuracoes from '@/pages/Configuracoes'
import PrimeiraPag from '@/pages/PrimeiraPag'
import SegundaPag from '@/pages/SegundaPag'
import SelecTemaLaranja from '@/pages/SelecTemaLaranja'
import Pergunta from '@/pages/Pergunta'
import Resposta from '@/pages/Resposta'
import Atencao from '@/pages/Atencao'
import CopaDoMundo from '@/pages/CopaDoMundo'
import SelecTemaVermelho from '@/pages/SelecTemaVermelho'
import SelecTemaAzul from '@/pages/SelecTemaAzul'
import SelecTemaRoxo from '@/pages/SelecTemaRoxo'
import SelecTemaVerde from '@/pages/SelecTemaVerde'
import SelecTemaAmarelo from '@/pages/SelecTemaAmarelo'
import SelecTemaBranco from '@/pages/SelecTemaBranco'
import SelecTemaRosa from '@/pages/SelecTemaRosa'
import { SQLiteProvider } from 'expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'

import {
  buscarPergunta,
  reciclarPerguntas,
} from '../../database/perguntas'

function AppContent() {
  const [pagina, setPagina] = useState('home')

  const [corPergunta, setCorPergunta] = useState('orange')
  const [perguntaAtual, setPerguntaAtual] = useState('')
  const [respostaAtual, setRespostaAtual] = useState('')

  const db = useSQLiteContext()

  const [categoriaAtual, setCategoriaAtual] = useState('')

  async function gerarPergunta(categoria:string,
     cor:string
    ) {
  const pergunta = await buscarPergunta(db, categoria)

  if (!pergunta) {
    alert('Não existem mais perguntas dessa categoria.')
    return
  }

  setCategoriaAtual(categoria)
  setPerguntaAtual(pergunta.pergunta)
  setRespostaAtual(pergunta.resposta)
  setCorPergunta(cor)

  setPagina('atencao')
  }

  async function reciclarTudo() {
  await reciclarPerguntas(db)

  alert('Todas as perguntas foram recicladas!')
}

  if (pagina === 'home') {
    return <Home
  mudarPagina={setPagina}
  reciclarTudo={reciclarTudo}
/>
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
    return (
      <SelecTemaLaranja
    mudarPagina={setPagina}
    gerarPergunta={gerarPergunta}
    />
    )
  }

  if (pagina === 'temaVermelho') {
    return <SelecTemaVermelho
    mudarPagina={setPagina}
    gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'temaAzul') {
    return <SelecTemaAzul 
        mudarPagina={setPagina}
        gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'temaRoxo') {
    return <SelecTemaRoxo 
        mudarPagina={setPagina}
        gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'temaVerde') {
    return <SelecTemaVerde 
        mudarPagina={setPagina}
        gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'temaAmarelo') {
    return <SelecTemaAmarelo 
        mudarPagina={setPagina}
        gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'temaBranco') {
    return <SelecTemaBranco 
        mudarPagina={setPagina}
        gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'temaRosa') {
    return <SelecTemaRosa 
        mudarPagina={setPagina}
        gerarPergunta={gerarPergunta}
    />
  }

  if (pagina === 'atencao') {
    return <Atencao mudarPagina={setPagina} />
  }

  if (pagina === 'pergunta') {
    return (
      <Pergunta
        mudarPagina={setPagina}
        pergunta={perguntaAtual}
        cor={corPergunta}
      />
    )
  }

  if (pagina === 'resposta') {
    return (
      <Resposta
      mudarPagina={setPagina}
      pergunta={perguntaAtual}
      resposta={respostaAtual}
      cor={corPergunta}
      reciclarPerguntas={reciclarTudo}
      gerarPergunta={gerarPergunta}
      categoriaAtual={categoriaAtual}
      />
    )
  }
}

export default function App() {
  return (
    <SQLiteProvider
      databaseName="perguntas.db"
      assetSource={{
        assetId: require('../../assets/database/perguntas.db'),
        forceOverwrite: false,
      }}
    >
      <AppContent />
    </SQLiteProvider>
  )
}