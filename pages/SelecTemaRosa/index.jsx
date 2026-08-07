import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import { View, ScrollView } from 'react-native'

import perguntas from '../../data/perguntas'

function SelecTemaRosa({
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

    setCorPergunta('pink')

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
            cor='pink'
            titulo='Seleção de Tema'
            texto='Selecione um dos temas de Conhecimentos Gerais.'
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
              cor='pink'
              escrever='Cultura'
              onPress={() => gerarPergunta(perguntas.cultura)}
            />

            <Button
              cor='pink'
              escrever='Esoterismo'
              onPress={() => gerarPergunta(perguntas.esoterismo)}
            />

            <Button
              cor='pink'
              escrever='Religião'
              onPress={() => gerarPergunta(perguntas.religiao)}
            />

            <Button
              cor='pink'
              escrever='Artes'
              onPress={() => gerarPergunta(perguntas.artes)}
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

export default SelecTemaRosa