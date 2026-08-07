import { View, ScrollView } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

import perguntas from '../../data/perguntas'

function SelecTemaAzul({
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

    setCorPergunta('rgba(80,170,255,1)')

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
            cor="rgba(80,170,255,1)"
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
              cor="rgba(80,170,255,1)"
              escrever="Esportes"
              onPress={() => gerarPergunta(perguntas.esportes)}
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="HQ e Mangás"
              onPress={() => gerarPergunta(perguntas.hqMangas)}
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="Jogos e Games"
              onPress={() => gerarPergunta(perguntas.jogosGames)}
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="Infantil"
              onPress={() => gerarPergunta(perguntas.infantil)}
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

export default SelecTemaAzul