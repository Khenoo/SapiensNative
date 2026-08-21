import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaAzul({
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
              alignItems: 'center',
            }}
          >
            <Button
              cor="rgba(80,170,255,1)"
              escrever="Esportes"
              onPress={() =>
                gerarPergunta(
                  'esportes',
                  'rgba(80,170,255,1)'
                )
              }
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="HQ e Mangás"
              onPress={() =>
                gerarPergunta(
                  'hqMangas',
                  'rgba(80,170,255,1)'
                )
              }
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="Jogos e Games"
              onPress={() =>
                gerarPergunta(
                  'jogosGames',
                  'rgba(80,170,255,1)'
                )
              }
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="Infantil"
              onPress={() =>
                gerarPergunta(
                  'infantil',
                  'rgba(80,170,255,1)'
                )
              }
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

export default SelecTemaAzul