import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaLaranja({
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
            cor="orange"
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
              cor="orange"
              escrever="Geografia"
              onPress={() => gerarPergunta('geografia', 'orange')}
            />

            <Button
              cor="orange"
              escrever="História"
              onPress={() => gerarPergunta('historia', 'orange')}
            />

            <Button
              cor="orange"
              escrever="Filosofia"
              onPress={() => gerarPergunta('filosofia', 'orange')}
            />

            <Button
              cor="orange"
              escrever="Socio, Psico e Educação"
              onPress={() => gerarPergunta('soci,PsicoEEduc', 'orange')}
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

export default SelecTemaLaranja