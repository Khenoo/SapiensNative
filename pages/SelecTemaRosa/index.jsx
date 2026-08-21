import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaRosa({
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
            cor="pink"
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
              cor="pink"
              escrever="Cultura"
              onPress={() => gerarPergunta('cultura', 'pink')}
            />

            <Button
              cor="pink"
              escrever="Esoterismo"
              onPress={() => gerarPergunta('esoterismo', 'pink')}
            />

            <Button
              cor="pink"
              escrever="Religião"
              onPress={() => gerarPergunta('religiao', 'pink')}
            />

            <Button
              cor="pink"
              escrever="Artes"
              onPress={() => gerarPergunta('artes', 'pink')}
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

export default SelecTemaRosa