import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import { View, ScrollView } from 'react-native'

import perguntas from '../../data/perguntas'

function SelecTemaRoxo({
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

    setCorPergunta('rgba(170, 80, 255, 1)')

    mudarPagina('atencao')
  }

  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 20,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
        >

          <TextBubble
            cor='rgba(170, 80, 255, 1)'
            titulo='Seleção de Tema'
            texto='Selecione um dos temas da área de Entretenimento.'
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
              cor='rgba(170, 80, 255, 1)'
              escrever='Cinema'
              onPress={() => gerarPergunta(perguntas.cinema)}
            />

            <Button
              cor='rgba(170, 80, 255, 1)'
              escrever='Televisão'
              onPress={() => gerarPergunta(perguntas.televisao)}
            />

            <Button
              cor='rgba(170, 80, 255, 1)'
              escrever='Música'
              onPress={() => gerarPergunta(perguntas.musica)}
            />

            <Button
              cor='rgba(170, 80, 255, 1)'
              escrever='Séries'
              onPress={() => gerarPergunta(perguntas.series)}
            />
          </View>

          <Button
            cor='white'
            escrever='Retornar ao Menu Principal'
            onPress={() => mudarPagina('home')}
          />

        </ScrollView>
      </View>
    </Fundo>
  )
}

export default SelecTemaRoxo