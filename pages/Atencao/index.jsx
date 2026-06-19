import { View, Text } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'

function Atencao({ mudarPagina }) {
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
        <View />

        <View
          style={{
            width: '90%',
            backgroundColor: 'rgba(255,255,224,0.95)',
            borderWidth: 2,
            borderRadius: 20,
            padding: 30,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            ATENÇÃO!!!
          </Text>

          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Entregue o celular para o leitor das perguntas
          </Text>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            A pergunta será gerada. Caso o celular esteja com o jogador, passe-o para o leitor.
          </Text>

          <Button
            cor="white"
            escrever="Continuar Para Pergunta"
            onPress={() => mudarPagina('pergunta')}
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

export default Atencao