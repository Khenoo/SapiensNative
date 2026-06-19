import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import { View } from 'react-native'

import perguntas from '../../data/perguntas'

function SelecTemaVermelho({
  mudarPagina,
  setPerguntaAtual,
  setRespostaAtual,
  setCorPergunta
}) {

  function gerarPergunta(listaPerguntas) {
    const sorteada =
      listaPerguntas[
        Math.floor(Math.random() * listaPerguntas.length)
      ]

    setPerguntaAtual(sorteada.pergunta)
    setRespostaAtual(sorteada.resposta)

    setCorPergunta('rgba(255, 75, 75, 1)')

    mudarPagina('atencao')
  }

  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <TextBubble
          cor='rgba(255, 75, 75, 1)'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Ciências Sociais Aplicadas.'
        />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button
            cor='rgba(255, 75, 75, 1)'
            escrever='Economia e Administração'
            onPress={() => gerarPergunta(perguntas.economiaAdministracao)}
          />

          <Button
            cor='rgba(255, 75, 75, 1)'
            escrever='Direito'
            onPress={() => gerarPergunta(perguntas.direito)}
          />

          <Button
            cor='rgba(255, 75, 75, 1)'
            escrever='Política'
            onPress={() => gerarPergunta(perguntas.politica)}
          />

          <Button
            cor='rgba(255, 75, 75, 1)'
            escrever='Comunicação e Imprensa'
            onPress={() => gerarPergunta(perguntas.comunicacaoImprensa)}
          />
        </View>

        <Button
          cor='white'
          escrever='Retornar ao Menu Principal'
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Fundo>
  )
}

export default SelecTemaVermelho