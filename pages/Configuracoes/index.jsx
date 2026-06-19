import { View, Text } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function Configuracoes({ mudarPagina }) {
  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <TextBubble
          cor='white'
          titulo='Configurações'
          texto='Ajuste algumas opções do aplicativo.'
        />

        <View
          style={{
            width: '90%',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderWidth: 2,
            borderRadius: 20,
            padding: 25,
          }}
        >
          <Text style={{ fontSize: 20, textAlign: 'center' }}>
            Configurações em desenvolvimento
          </Text>

          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
            }}
          >
            Testeteste
          </Text>
        </View>

        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Fundo>
  )
}

export default Configuracoes