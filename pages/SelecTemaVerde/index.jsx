import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaVerde({
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
            cor="green"
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
              cor="green"
              escrever="Corpo Humano e Saúde"
              onPress={() => gerarPergunta('corpoHumanoSaude', 'green')}
            />

            <Button
              cor="green"
              escrever="Meio Ambiente"
              onPress={() => gerarPergunta('meioAmbiente', 'green')}
            />

            <Button
              cor="green"
              escrever="Seres Vivos"
              onPress={() => gerarPergunta('seresVivos', 'green')}
            />

            <Button
              cor="green"
              escrever="Química"
              onPress={() => gerarPergunta('quimica', 'green')}
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

export default SelecTemaVerde