import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import { View, ScrollView } from 'react-native'

import perguntas from '../../data/perguntas'

function SelecTemaLaranja({
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

    setCorPergunta('orange')

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
            cor='orange'
            titulo='Seleção de Tema'
            texto='Para continuar, selecione um dos temas da grande área de Ciências Humanas.'
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
              cor='orange'
              escrever='Geografia'
              onPress={() => gerarPergunta(perguntas.geografia)}
            />

            <Button
              cor='orange'
              escrever='História'
              onPress={() => gerarPergunta(perguntas.historia)}
            />

            <Button
              cor='orange'
              escrever='Filosofia'
              onPress={() => gerarPergunta(perguntas.filosofia)}
            />

            <Button
              cor='orange'
              escrever='Sócio, Psico e Educação'
              onPress={() => gerarPergunta(perguntas.socioPsicoEducacao)}
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

export default SelecTemaLaranja