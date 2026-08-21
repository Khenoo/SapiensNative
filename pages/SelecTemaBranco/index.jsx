import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaBranco({
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
            cor="white"
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
              cor="white"
              escrever="Matemática e Lógica"
              onPress={() => gerarPergunta('matematicaLogica', 'white')}
            />

            <Button
              cor="white"
              escrever="Física e Astronomia"
              onPress={() => gerarPergunta('fisicaAstronomia', 'white')}
            />

            <Button
              cor="white"
              escrever="Engenharias"
              onPress={() => gerarPergunta('engenharias', 'white')}
            />

            <Button
              cor="white"
              escrever="Informática"
              onPress={() => gerarPergunta('informatica', 'white')}
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

export default SelecTemaBranco