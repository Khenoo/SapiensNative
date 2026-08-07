import { View, ScrollView } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import perguntas from '../../data/perguntas'

function SelecTemaAmarelo({
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

    setCorPergunta('yellow')

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
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          <TextBubble
            cor="yellow"
            titulo="Seleção de Tema"
            texto="Selecione um tema."
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
              cor="yellow"
              escrever="Língua Portuguesa"
              onPress={() => gerarPergunta(perguntas.linguaPortuguesa)}
            />

            <Button
              cor="yellow"
              escrever="Línguas Estrangeiras"
              onPress={() => gerarPergunta(perguntas.linguasEstrangeiras)}
            />

            <Button
              cor="yellow"
              escrever="Literatura Portuguesa"
              onPress={() => gerarPergunta(perguntas.literaturaPortuguesa)}
            />

            <Button
              cor="yellow"
              escrever="Literatura Estrangeira"
              onPress={() => gerarPergunta(perguntas.literaturaEstrangeira)}
            />
          </View>

          <Button
            cor="white"
            escrever="Retornar ao Menu Principal"
            onPress={() => mudarPagina('home')}
          />
        </ScrollView>
      </View>
    </Fundo>
  )
}

export default SelecTemaAmarelo