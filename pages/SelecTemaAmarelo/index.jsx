import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaAmarelo({
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
              alignItems: 'center',
            }}
          >
            <Button
              cor="yellow"
              escrever="Língua Portuguesa"
              onPress={() =>
                gerarPergunta('linguaPortuguesa', 'yellow')
              }
            />

            <Button
              cor="yellow"
              escrever="Línguas Estrangeiras"
              onPress={() =>
                gerarPergunta('linguasEstrangeiras', 'yellow')
              }
            />

            <Button
              cor="yellow"
              escrever="Literatura Portuguesa"
              onPress={() =>
                gerarPergunta('literaturaPortuguesa', 'yellow')
              }
            />

            <Button
              cor="yellow"
              escrever="Literatura Estrangeira"
              onPress={() =>
                gerarPergunta('literaturaEstrangeira', 'yellow')
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

export default SelecTemaAmarelo