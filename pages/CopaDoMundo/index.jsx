import { View } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function CopaDoMundo({ mudarPagina }) {
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
          titulo='Copa do Mundo'
          texto='Escolha como a pergunta será selecionada.'
        />

        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Button
            cor="white"
            escrever="Pergunta Gerada pelo Sistema"
            onPress={() => mudarPagina('atencao')}
          />

          <Button
            cor="white"
            escrever="Escolha do Jogador"
            onPress={() => mudarPagina('segunda')}
          />
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

export default CopaDoMundo