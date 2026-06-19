import { View, Text, ScrollView } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function Tutorial({ mudarPagina }) {
  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 20,
        }}
      >
        <TextBubble
          cor='white'
          titulo='Tutorial do Jogo'
          texto='Aprenda como jogar o Sapiens.'
        />

        <ScrollView
          style={{
            flex: 1,
            marginVertical: 15,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderWidth: 2,
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Como jogar
          </Text>

          <Text>1. Escolha um modo de jogo.</Text>
          <Text>2. Escolha a grande área desejada.</Text>
          <Text>3. Escolha um tema.</Text>
          <Text>4. Passe o celular para o leitor.</Text>
          <Text>5. O sistema irá gerar uma pergunta.</Text>
          <Text>6. Leia a pergunta e tente acertar.</Text>
          <Text>7. Revele a resposta.</Text>
          <Text>8. Continue até decidir parar.</Text>

          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}
          >
            Modos de jogo
          </Text>

          <Text>• O Generalista</Text>
          <Text>• Mestre dos Magos</Text>
          <Text>• Copa do Mundo</Text>
          <Text>• Generalista Sortudo</Text>
          <Text>• O Especialista</Text>
          <Text>• O Caminho Para a Vitória</Text>
          <Text>• Essa é a sua área</Text>
          <Text>• Cartas na mesa</Text>
          <Text>• O Especialista Sortudo</Text>
        </ScrollView>

        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Fundo>
  )
}

export default Tutorial