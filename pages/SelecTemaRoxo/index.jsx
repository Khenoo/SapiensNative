import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaRoxo({
  mudarPagina,
  gerarPergunta
}) {
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
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextBubble
            cor="purple"
            titulo="Seleção de Tema"
            texto="Selecione um tema."
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              cor="rgba(170,80,255,1)"
              escrever="Cinema"
              onPress={() => gerarPergunta('cinema', 'rgba(170,80,255,1)')}
            />

            <Button
              cor="rgba(170,80,255,1)"
              escrever="Televisão"
              onPress={() => gerarPergunta('televisao', 'rgba(170,80,255,1)')}
            />

            <Button
              cor="rgba(170,80,255,1)"
              escrever="Música"
              onPress={() => gerarPergunta('musica', 'rgba(170,80,255,1)')}
            />

            <Button
              cor="rgba(170,80,255,1)"
              escrever="Séries"
              onPress={() => gerarPergunta('series', 'rgba(170,80,255,1)')}
            />
          </View>
        </ScrollView>

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

export default SelecTemaRoxo