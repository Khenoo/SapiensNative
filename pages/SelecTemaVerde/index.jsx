import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import { View } from 'react-native'

import perguntas from '../../data/perguntas'

function SelecTemaVerde({
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

    setCorPergunta('green')

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
          cor='green'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Ciências Naturais.'
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
            cor='green'
            escrever='Corpo Humano e Saúde'
            onPress={() => gerarPergunta(perguntas.corpoHumanoSaude)}
          />

          <Button
            cor='green'
            escrever='Meio Ambiente'
            onPress={() => gerarPergunta(perguntas.meioAmbiente)}
          />

          <Button
            cor='green'
            escrever='Seres Vivos'
            onPress={() => gerarPergunta(perguntas.seresVivos)}
          />

          <Button
            cor='green'
            escrever='Química'
            onPress={() => gerarPergunta(perguntas.quimica)}
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

export default SelecTemaVerde