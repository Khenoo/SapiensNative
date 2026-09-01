const fs = require('fs')
const path = require('path')
const XLSX = require('xlsx')
const sqlite3 = require('sqlite3').verbose()

const pastaPlanilhas = path.join(__dirname, '../planilhas')
const pastaBanco = path.join(__dirname, '../assets/database')

if (!fs.existsSync(pastaBanco)) {
  fs.mkdirSync(pastaBanco, { recursive: true })
}

const caminhoBanco = path.join(pastaBanco, 'perguntas.db')

if (fs.existsSync(caminhoBanco)) {
  fs.unlinkSync(caminhoBanco)
}

const db = new sqlite3.Database(caminhoBanco)

function removerAcentos(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function normalizarCategoria(nome) {
  let resultado = removerAcentos(String(nome))
    .replace(/[_-]/g, ' ')
    .trim()

  const palavras = resultado.split(/\s+/)

  return palavras
    .map((palavra, indice) => {
      palavra = palavra.toLowerCase()

      if (indice === 0) {
        return palavra
      }

      return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    })
    .join('')
}

function corrigirCategoria(categoria) {
  const mapa = {
    'sociPsicoeEduc': 'socioPsicoEducacao',
    'sociPsicoEEduc': 'socioPsicoEducacao',
    'soci,PsicoEEduc': 'socioPsicoEducacao',


    'economiaAdmini': 'economiaAdministracao',

    'linguaestrangeira': 'linguasEstrangeiras',
    'linguaportuguesaLibras': 'linguaPortuguesa',
    'literaturaLinguaport': 'literaturaPortuguesa',
    'literaturaEstrangeira': 'literaturaEstrangeira',

    'hqsMangas': 'hqMangas',

    'corpohumanoSaude': 'corpoHumanoSaude',
    'meioambiente': 'meioAmbiente',
    'seresvivos': 'seresVivos',
  }

  return mapa[categoria] || categoria
}

function descobrirGrandeArea(nomeArquivo) {
  const nome = removerAcentos(
    path.basename(nomeArquivo, '.xlsx').toLowerCase()
  )

  if (nome.includes('humana')) {
    return 'humanas'
  }

  if (nome.includes('sociais')) {
    return 'sociaisAplicadas'
  }

  if (nome.includes('linguas')) {
    return 'linguagens'
  }

  if (nome.includes('conhecimentosgerais')) {
    return 'conhecimentosGerais'
  }

  if (nome.includes('entretenimento')) {
    return 'entretenimento'
  }

  if (nome.includes('lazer')) {
    return 'lazer'
  }

  if (nome.includes('exatas')) {
    return 'exatas'
  }

  if (nome.includes('cienciasnaturais')) {
    return 'cienciasNaturais'
  }

  return nome
}

db.serialize(() => {
  db.run(`
    CREATE TABLE perguntas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      grandeArea TEXT NOT NULL,
      categoria TEXT NOT NULL,
      pergunta TEXT NOT NULL,
      resposta TEXT NOT NULL,
      usada INTEGER NOT NULL DEFAULT 0
    )
  `)

  db.run(`
    CREATE INDEX idx_categoria
    ON perguntas(categoria)
  `)

  db.run(`
    CREATE INDEX idx_categoria_usada
    ON perguntas(categoria, usada)
  `)

  const inserir = db.prepare(`
    INSERT INTO perguntas (
      grandeArea,
      categoria,
      pergunta,
      resposta
    )
    VALUES (?, ?, ?, ?)
  `)

  const arquivos = fs
    .readdirSync(pastaPlanilhas)
    .filter((arquivo) => arquivo.toLowerCase().endsWith('.xlsx'))

  let total = 0

  for (const arquivo of arquivos) {
    const caminhoArquivo = path.join(
      pastaPlanilhas,
      arquivo
    )

    const workbook = XLSX.readFile(caminhoArquivo)

    const grandeArea = descobrirGrandeArea(arquivo)

    console.log('')
    console.log('==================================')
    console.log(grandeArea)
    console.log('==================================')

    for (const nomeAba of workbook.SheetNames) {
      const sheet = workbook.Sheets[nomeAba]

      const linhas = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: ''
      })

      let quantidade = 0

      for (let i = 2; i < linhas.length; i++) {
        const linha = linhas[i]

        if (!linha) {
          continue
        }

        const pergunta = String(
          linha[0] || ''
        ).trim()

        const resposta = String(
          linha[1] || ''
        ).trim()

        if (!pergunta || !resposta) {
          continue
        }

        const categoriaOriginal =
          normalizarCategoria(nomeAba)

        const categoria =
          corrigirCategoria(categoriaOriginal)

        inserir.run(
          grandeArea,
          categoria,
          pergunta,
          resposta
        )

        quantidade++
        total++
      }

      console.log(
        `${corrigirCategoria(
          normalizarCategoria(nomeAba)
        ).padEnd(30)} ${quantidade}`
      )
    }
  }

  inserir.finalize(() => {
    db.get(
      'SELECT COUNT(*) AS total FROM perguntas',
      (erro, resultado) => {
        if (erro) {
          console.error(
            'Erro ao contar perguntas:',
            erro
          )
          return
        }

        console.log('')
        console.log(
          '=================================='
        )
        console.log(
          'BANCO CRIADO COM SUCESSO!'
        )
        console.log(
          '=================================='
        )
        console.log(
          `Total: ${resultado.total} perguntas`
        )
        console.log(
          '=================================='
        )
        console.log(
          `Arquivo: ${caminhoBanco}`
        )

        db.close()
      }
    )
  })
})