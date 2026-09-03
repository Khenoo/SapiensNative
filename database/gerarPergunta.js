import { View, ScrollView } from 'react-native'
import { useSQLiteContext } from 'expo-sqlite'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'

import gerarPergunta from '../../database/gerarPergunta'

function SelecTemaLaranja({
  mudarPagina,
  setPerguntaAtual,
  setRespostaAtual,
  setCorPergunta,
}) {

  const db = useSQLiteContext()

  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 20,
        }}
      >

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >

            <Button
              cor="orange"
              escrever="Geografia"
              onPress={() =>
                gerarPergunta({
                  db,
                  categoria: 'geografia',
                  cor: 'orange',
                  mudarPagina,
                  setPerguntaAtual,
                  setRespostaAtual,
                  setCorPergunta,
                })
              }
            />

            <Button
              cor="orange"
              escrever="História"
              onPress={() =>
                gerarPergunta({
                  db,
                  categoria: 'historia',
                  cor: 'orange',
                  mudarPagina,
                  setPerguntaAtual,
                  setRespostaAtual,
                  setCorPergunta,
                })
              }
            />

            <Button
              cor="orange"
              escrever="Filosofia"
              onPress={() =>
                gerarPergunta({
                  db,
                  categoria: 'filosofia',
                  cor: 'orange',
                  mudarPagina,
                  setPerguntaAtual,
                  setRespostaAtual,
                  setCorPergunta,
                })
              }
            />

            <Button
              cor="orange"
              escrever="Socio, Psico e Educação"
              onPress={() =>
                gerarPergunta({
                  db,
                  categoria: 'soci,PsicoEEduc',
                  cor: 'orange',
                  mudarPagina,
                  setPerguntaAtual,
                  setRespostaAtual,
                  setCorPergunta,
                })
              }
            />

          </View>

        </View>

        <View
          style={{
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Button
            cor="white"
            escrever="Retornar ao Menu Principal"
            onPress={() => mudarPagina('home')}
          />
        </View>

      </View>
    </Fundo>
  )
}

export default SelecTemaLaranja