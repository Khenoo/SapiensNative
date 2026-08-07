import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import { View, ScrollView } from 'react-native'

import perguntas from '../../data/perguntas'

function SelecTemaBranco({
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

    setCorPergunta('white')

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
            cor='white'
            titulo='Seleção de Tema'
            texto='Selecione um dos temas da área de Ciências Exatas.'
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
              cor='white'
              escrever='Matemática e Lógica'
              onPress={() => gerarPergunta(perguntas.matematicaLogica)}
            />

            <Button
              cor='white'
              escrever='Física e Astronomia'
              onPress={() => gerarPergunta(perguntas.fisicaAstronomia)}
            />

            <Button
              cor='white'
              escrever='Engenharias'
              onPress={() => gerarPergunta(perguntas.engenharias)}
            />

            <Button
              cor='white'
              escrever='Informática'
              onPress={() => gerarPergunta(perguntas.informatica)}
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

export default SelecTemaBranco