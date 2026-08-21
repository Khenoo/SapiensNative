export async function buscarPergunta(
  db,
  categoria
) {
  const pergunta = await db.getFirstAsync(
    `
      SELECT
        id,
        grandeArea,
        categoria,
        pergunta,
        resposta
      FROM perguntas
      WHERE categoria = ?
        AND usada = 0
      ORDER BY RANDOM()
      LIMIT 1
    `,
    categoria
  )

  if (!pergunta) {
    return null
  }

  await db.runAsync(
    `
      UPDATE perguntas
      SET usada = 1
      WHERE id = ?
    `,
    pergunta.id
  )

  return pergunta
}

export async function reciclarPerguntas(
  db,
  categoria
) {
  if (categoria) {
    await db.runAsync(
      `
        UPDATE perguntas
        SET usada = 0
        WHERE categoria = ?
      `,
      categoria
    )

    return
  }

  await db.runAsync(`
    UPDATE perguntas
    SET usada = 0
  `)
}

export async function contarPerguntasDisponiveis(
  db,
  categoria
) {
  const resultado = await db.getFirstAsync(
    `
      SELECT COUNT(*) AS quantidade
      FROM perguntas
      WHERE categoria = ?
        AND usada = 0
    `,
    categoria
  )

  return resultado?.quantidade || 0
}